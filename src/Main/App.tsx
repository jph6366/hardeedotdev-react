import * as React from 'react';
import "./App.scss";


import { SinglePageAppView } from '../Presentation/SinglePageAppView';
import { InMemoryDataSourceImpl } from '../Data/DataSource/InMemoryDataSourceImpl';
import { PageAppRepositoryImpl } from '../Data/Repository/PageAppRepositoryImpl';


// Dependency injection
const dataSource = new InMemoryDataSourceImpl();
const repository = new PageAppRepositoryImpl(dataSource)

export function App() {
    return <SinglePageAppView pageRepository={repository}  />
}