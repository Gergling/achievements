// TODO: Make this file redundant.

import * as fs from 'fs';
import { AchievementData } from './types.ts';

// What we want:
// Write the HTML to a distribution directory for deployment, including appropriate resources.
// Loop the list of folders looking for an index.html file and an index.ts file.

const ACHIEVEMENTS_FOLDER = 'list';
const DISTRIBUTION_FOLDER = 'dist';

const getAchievementFolders = () => {
  return fs.readdirSync(ACHIEVEMENTS_FOLDER);
};

const getIconName = (
  category: AchievementData['category'],
  subcategory: AchievementData['subcategory']
): string => `${category}-${subcategory}`;

const getIconSVG = (
  category: AchievementData['category'],
  subcategory: AchievementData['subcategory']
): string => {
  if (category) {
    console.log(`- Rendering for category "${category}".`);
    if (subcategory) {
      console.log(`- Rendering for subcategory "${subcategory}".`);
      const path = `assets/icons/${getIconName(category, subcategory)}.svg`;
      if (fs.existsSync(path)) {
        return fs.readFileSync(`assets/icons/${getIconName(category, subcategory)}.svg`, 'utf8');
      } else {
        console.log(`! No icon file found at "${path}".`);
      }
    } else {
      console.log('! No subcategory specified.');
    }
  } else {
    console.log('! No category specified.');
  }
  return '';
};

const getDashboardDateFormat = (date: Date): string => {
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

const getWrapperHTML = (content: string) => `
  <html>
    <head>
      <link href="assets/styles/main.css" rel="stylesheet" />
      <script src="script.js"></script>
    </head>
    <body>
      <button onClick="sortDashboardItems();">Sort</button>
      ${content}
    </body>
  </html>
`;

const getAchievementPageHeaderHTML = ({
  rating,
  date,
  description,
  category,
  subcategory,
}: AchievementData): string => `
  <div class="rating-${rating} icon-${getIconName(category, subcategory)}">
    <div class="date">${date}</div>
    <div class="description">${description}</div>
  </div>
`;

const getAchievementPageHTML = (achievement: AchievementData): string => getWrapperHTML(`
  <div>
    <a href="../">Dashboard</a>
    <div class="header">
      ${getAchievementPageHeaderHTML(achievement)}
    </div>
    <div class="content">${achievement.html}</div>
  </div>
`);

const getDashboardHTMLItem = ({ rating, date, description, path, category, subcategory }: AchievementData): string =>`
  <li class="rating ${rating}" data-category="${category}" data-date="${date}">
    <a href="${path}">
      <div class="icon category-${category}">${getIconSVG(category, subcategory)}</div>
      <div>
        <div class="date">${getDashboardDateFormat(date)}</div>
        <div class="description">${description}</div>
      </div>
    </a>
  </li>
`;

const getDashboardHTML = (achievements: AchievementData[]): string =>
  getWrapperHTML(`<ul id="achievement-list">${achievements
    .map((achievement) => {
      console.log(`Getting dashboard HTML for ${achievement.path}`);
      return getDashboardHTMLItem(achievement);
    })
    .join('')}</ul>`);

const writeDirectory = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};
const writeFile = (path: string, html: string) => {
  if (!fs.existsSync(path)) {
    const handle = fs.openSync(path, 'w');
    fs.closeSync(handle);
  }
  fs.writeFileSync(path, html, 'utf8');
};

const main = async () => {
  // Consolidate achievement data.
  const achievements: AchievementData[] = [];
  const folders = getAchievementFolders();
  for (const path of folders) {
    const { default: { category, subcategory, rating, date, description } } = await import(`../${ACHIEVEMENTS_FOLDER}/${path}/index`);
    const html = fs.readFileSync(`${ACHIEVEMENTS_FOLDER}/${path}/index.html`, 'utf8');
    achievements.push({
      category,
      subcategory,
      rating,
      date,
      description,
      html,
      path,
    });
  }

  // Distribution folder setup.
  writeDirectory(DISTRIBUTION_FOLDER);
  writeDirectory(`${DISTRIBUTION_FOLDER}/assets`);
  fs.cpSync('assets/icons', `${DISTRIBUTION_FOLDER}/assets/icons`, {recursive: true});
  fs.cpSync('src/script.js', `${DISTRIBUTION_FOLDER}/script.js`);

  // Write achievement pages.
  for (const achievement of achievements) {
    const { path } = achievement;
    writeDirectory(`${DISTRIBUTION_FOLDER}/${path}`);
    writeFile(`${DISTRIBUTION_FOLDER}/${path}/index.html`, getAchievementPageHTML(achievement));
  }

  // Make dashboard.
  writeFile(`${DISTRIBUTION_FOLDER}/index.html`, getDashboardHTML(achievements));
};

main();
