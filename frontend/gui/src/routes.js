import React from 'react';
import { Route } from "react-router-dom";
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import AnimalList from './containers/AnimalListView'
import AnimalDetail from './containers/AnimalDetailView';
import HomeView from './containers/HomeView';
import DataVisualization from './containers/DataVisualization'

const BaseRouter = () => (
    <div>
        <Route exact path = "/" component={HomeView}/>
        <Route exact path = "/articles" component={ArticleList}/>
        <Route exact path = "/articles/:articleID" component={ArticleDetail}/>
        <Route exact path = "/animals" component={AnimalList}/>
        <Route exact path = "/animals/:animalID" component={AnimalDetail}/>
        <Route exact path = "/data" component={DataVisualization}/>
    </div>
)

export default BaseRouter;