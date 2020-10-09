import React, { useState } from 'react';
import './App.css';
import Pokemones from './Pokemones';
import Post from './Post';
import {Layout, Menu, Breadcrumb, Divider, Button, Row, Col, Image, Card, Tag, Collapse, Progress, Descriptions, Badge
,Radio, Modal, Carousel } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppstoreOutlined, SearchOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;

function AppMenu() {
  const [current, setCurrent] = useState()
  return (

    <Menu onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      <SubMenu key="Pokemones" icon={<AppstoreOutlined />} title="Pokemones">
        <Menu.Item key="pokemones:1"><Link to="/pokemones">Productos</Link></Menu.Item>
       <Menu.Item key="pokemones:2"><Link to="/productos/new">New Pokemones</Link></Menu.Item>
      </SubMenu>

      <Menu.Item key="contactos" icon={<AppstoreOutlined />}>
        <Link to="/contactos">Contactos</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

function PokemonesRoutes(props) {
  return (
    <>
      <Route exact path={`${props.match.path}/`} component={Pokemones} />
    </>
  );
}

function App() {
  return (
  // {empresas.map(empresas => { 
    <Router>
      <Layout>
        <Header style={{ color: 'white', fontSize: 30, textAlign: 'center' }} >  
        </Header>
        <Content>
          <div className="site-layout-content">
            <AppMenu />
            <br />
            <>
            <Route path="/" exact component={Home} />
            <Route path="/productos" component={PokemonesRoutes} />
            {/* <Route path="/categorias" component={CategoriasRoutes} />   */}
            </>
          </div>
        </Content>
        <div> </div>
        <Footer>
        </Footer>
      </Layout>
    </Router>
   
 ); 
}


export default App;
