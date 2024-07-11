import { createContext } from 'react';

type ViewContextProps = 'dashboard' | 'detail';

const ViewContext = createContext<ViewContextProps>('dashboard');
export default ViewContext;
