import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'
import CadastroCategoria from './pages/Cadastro/Categoria'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />

      <Route component={()=>(<div>Pagina 404</div>)} />
    </Switch>
    
  </Router>,
  document.getElementById('root')
);


