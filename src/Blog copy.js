import React from 'react';
import {Layout, Menu, Breadcrumb, Divider, Button, Row, Col, Image, Card, Tag } from 'antd';
import "antd/dist/antd.css";
import "./Blog.css";
import Title from 'antd/lib/skeleton/Title';
import {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
  } from '@ant-design/icons';

const{ Header, Footer, Content, Sider} = Layout;

// const posts = [
//     {
//         titulo: "¿Qué son los hábitos alimentarios saludables y por qué son importantes?",
//         contenido: "Los hábitos son acciones que se aprenden por repetición. La casa y el colegio son los lugares donde, generalmente, nuestros hijos aprenden sus conductas. Por esto, es tan importante que trabajemos articuladamente para fomentar el desarrollo de hábitos de vida saludable. En los primeros años de vida, los niños aprenden por imitación y por esto, una herramienta clave para ayudarles a desarrollar hábitos es a través de nuestro ejemplo. Por ejemplo, la evidencia nos muestra que cuando el padre o madre incluyen una fruta o verdura en su dieta diaria, los hijos tenderán a comer media porción de fruta o verdura más al día (Haire-Joshu, Elliot, Caito, et. al., 2008). Así mismo, tanto en cada como en el colegio, es muy importante que regulemos el tipo de alimentos que ponemos a su disposición, pues si solo tienen acceso a productos ultraprocesados, no existirá motivación para consumir alimentos saludables esenciales para su crecimiento.envejecimiento saludable. El aislamiento social puede llevar a un deterioro gradual e irreversible de las capacidades físicas y mentales, incluso a la incapacidad física y la demencia.",
//         imagen_url : "https://www.vallesdelsol.cl/wp-content/uploads/2020/08/menu-semanal-saludable5_56e25094_1280x961.jpg"

//     },
//     {
//         titulo: "¿Es malo practicar Yoga?",
//         contenido: "Vivimos en tiempos en que se está revalorizando la importancia de comer sano y hacer deporte. Creo que algunas de mis amistades practican yoga en esta línea. También, la vida cotidiana nos hace andar envueltos de un jaleo acelerado, entre tanto barullo es importante serenar la mente y desintoxicarla de preocupaciones, ansiedades y agobios. Dentro de los múltiples pendientes del día a día, algunos encuentran en el yoga el momento y el espacio para hacer este alto en el camino Hay algunos consejos iniciales muy importantes si quieres empezar a hacer estas sesiones de Yoga en casa para principiantes. Si no las sigues, es posible que la práctica se vea afectada negativamente, y que realices mal las asanas, o pierdas la motivación. Por ejemplo, si te recomiendo realizar la respiración de una manera, que es la adecuada para esa asana, y tú piensas que no es relevante, te costará más el ejercicio. Piensa que uno de los ejercicios más conocidos del Yoga, el Saludo al Sol, se realiza expulsando el aire en el primer movimiento, Pranamasana, se respira en el segundo, en el tercero se vuelve a expulsar…",
//         imagen_url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"

//     },
//     {
//         titulo: "Rutina de la semana",
//         contenido: "RUTINA",
//         imagen_url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//     },
//     {
//         titulo: "¡AVOCADO TOAST!",
//         contenido: "VER MÁS",
//         imagen_url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"

//     }
// ]

// const columnaR = [
//     {
//       Día: 'Día',
//       Entrenamiento: 'Entrenamiento',
//       Duración: 'Duración'
//     },
//     {
//       Día: 'Día',
//       Entrenamiento: 'Entrenamiento',
//       Duración: 'Duración'
//     },
//     {
//       Día: 'Día',
//       Entrenamiento: 'Entrenamiento',
//       Duración: 'Duración'
//     },
//     {
//       Día: 'Día',
//       Entrenamiento: 'Entrenamiento',
//       Duración: 'Duración'
//     }
// ]

// const dataR = [
//   { 
//       Key: 1,
//       Día: 'Lunes',
//       Entrenamiento: 'Cardio',
//       Duración: '20min'
//   },
//   {
    
//       Key: 2,
//       Día: 'Lunes',
//       Entrenamiento: 'ABS',
//       Duración: '10min'
// },
//   {
      
//     Key: 3,
//     Día: 'Lunes',
//     Entrenamiento: 'Piernas',
//     Duración: '20min'
// },
// ]

<meta data-rh="true" property="og:image" content="https://www.vogue.mx/images/brands/vogue/meta-site-image.jpg"></meta>

function Blog (){
    return(
        <Layout className="layout"> 
        <Image width={180}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={180}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>       
        <Image width={100}  src="https://i.pinimg.com/564x/84/b6/ff/84b6ffb1145ec3335c407137c29e7ece.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/cf/fa/b2/cffab24fbe18a76e8415c46c633088ed.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/54/7f/51/547f51752c1c04c06bef0455a09202ad.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/f0/a5/4a/f0a54a3b1442eefcd3bca47a6e0f4462.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/65/b1/5f/65b15f6a75463fde409deb5e7848765b.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>
        <Image width={100}  scr="https://i.pinimg.com/564x/32/dc/7c/32dc7cb9fdab953ff59418985a08c888.jpg" ></Image>

        <Divider orientation="right"> Tu compañero del día </Divider>
        <Header>
          <div className="logo" /> 
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Blog</Menu.Item>
            <Menu.Item key="2" >About us</Menu.Item>
            <Menu.Item key="3">Contact us</Menu.Item>
          </Menu>
        </Header>
        <Content>
        <div className="site-layout-content"> 
        <Row>
        <Divider orientation="left">#SALUD</Divider>
            <Col span={12}> <h1>¿Qué son los hábitos alimentarios saludables y por qué son importantes?</h1>
            <p>Los hábitos son acciones que se aprenden por repetición. La casa y el colegio son los lugares donde, generalmente, nuestros hijos aprenden sus conductas. Por esto, es tan importante que trabajemos articuladamente para fomentar el desarrollo de hábitos de vida saludable. En los primeros años de vida, los niños aprenden por imitación y por esto, una herramienta clave para ayudarles a desarrollar hábitos es a través de nuestro ejemplo. Por ejemplo, la evidencia nos muestra que cuando el padre o madre incluyen una fruta o verdura en su dieta diaria, los hijos tenderán a comer media porción de fruta o verdura más al día (Haire-Joshu, Elliot, Caito, et. al., 2008). Así mismo, tanto en cada como en el colegio, es muy importante que regulemos el tipo de alimentos que ponemos a su disposición, pues si solo tienen acceso a productos ultraprocesados, no existirá motivación para consumir alimentos saludables esenciales para su crecimiento.envejecimiento saludable. El aislamiento social puede llevar a un deterioro gradual e irreversible de las capacidades físicas y mentales, incluso a la incapacidad física y la demencia.
            </p></Col>
            <Col span={12}> 
            <Image 
            src="https://www.vallesdelsol.cl/wp-content/uploads/2020/08/menu-semanal-saludable5_56e25094_1280x961.jpg"  width={600}  height = {400}      
            /> </Col>  
        
        <Divider orientation="right">#INFO VOGUE</Divider> 
            <Col span={12}> <h1>¿Qué son los hábitos alimentarios saludables y por qué son importantes?</h1>
            <p>Los hábitos son acciones que se aprenden por repetición. La casa y el colegio son los lugares donde, generalmente, nuestros hijos aprenden sus conductas. Por esto, es tan importante que trabajemos articuladamente para fomentar el desarrollo de hábitos de vida saludable. En los primeros años de vida, los niños aprenden por imitación y por esto, una herramienta clave para ayudarles a desarrollar hábitos es a través de nuestro ejemplo. Por ejemplo, la evidencia nos muestra que cuando el padre o madre incluyen una fruta o verdura en su dieta diaria, los hijos tenderán a comer media porción de fruta o verdura más al día (Haire-Joshu, Elliot, Caito, et. al., 2008). Así mismo, tanto en cada como en el colegio, es muy importante que regulemos el tipo de alimentos que ponemos a su disposición, pues si solo tienen acceso a productos ultraprocesados, no existirá motivación para consumir alimentos saludables esenciales para su crecimiento.envejecimiento saludable. El aislamiento social puede llevar a un deterioro gradual e irreversible de las capacidades físicas y mentales, incluso a la incapacidad física y la demencia.
            </p></Col>
            <Col span={12}> 
            <Image src="https://www.vallesdelsol.cl/wp-content/uploads/2020/08/menu-semanal-saludable5_56e25094_1280x961.jpg" width={600}  height = {400}      
             /> </Col>  

        <Divider orientation="left">#RUTINA</Divider>
            <Col span={12}> <h1>¿Qué son los hábitos alimentarios saludables y por qué son importantes?</h1>
            <p>Los hábitos son acciones que se aprenden por repetición. La casa y el colegio son los lugares donde, generalmente, nuestros hijos aprenden sus conductas. Por esto, es tan importante que trabajemos articuladamente para fomentar el desarrollo de hábitos de vida saludable. En los primeros años de vida, los niños aprenden por imitación y por esto, una herramienta clave para ayudarles a desarrollar hábitos es a través de nuestro ejemplo. Por ejemplo, la evidencia nos muestra que cuando el padre o madre incluyen una fruta o verdura en su dieta diaria, los hijos tenderán a comer media porción de fruta o verdura más al día (Haire-Joshu, Elliot, Caito, et. al., 2008). Así mismo, tanto en cada como en el colegio, es muy importante que regulemos el tipo de alimentos que ponemos a su disposición, pues si solo tienen acceso a productos ultraprocesados, no existirá motivación para consumir alimentos saludables esenciales para su crecimiento.envejecimiento saludable. El aislamiento social puede llevar a un deterioro gradual e irreversible de las capacidades físicas y mentales, incluso a la incapacidad física y la demencia.
            </p></Col>
            <Col span={12}> 
            <Image src="https://www.vallesdelsol.cl/wp-content/uploads/2020/08/menu-semanal-saludable5_56e25094_1280x961.jpg" alt="Ensalada al estilo VOGUE" width={600}  height = {400}      
             /> </Col>  
        
        </Row>
       
        <Divider orientation="right">#RECETAS</Divider>
        <Col span={24}>
        <div className="site-card-wrapper">
        <Row gutter={16}>
        <Col span={8}>
            <Card
            title="ACOCADO TOAST " extra={<a href="https://www.youtube.com/embed/WDRujOJVykE">More</a>} bordered={false}>
            <Image src="https://i.pinimg.com/564x/b3/70/b7/b370b7db447c310d174da982fd6abe4f.jpg" height ="300" weight= "400"/>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="ENSALADA VOGUE" extra={<a href="https://youtu.be/e63xQTqVgDQ?t=44">More</a>} bordered={false}>
            <Image src="https://css.adelgazarencasa.co/wp-content/uploads/2019/09/homemade-autumn-apple-walnut-spinach-salad-PT9QWM8.jpg" height ="300" weight= "300"/>
            <Image scr="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/01/receta-facil-de-aderezo-ranch.jpg" height ="300" weight= "300" />
            </Card>
        </Col>
        <Col span={8}>
            <Card title="BANANA-PANCAKES "  extra={<a href="https://youtu.be/-hNLnYXpAJA?t=3">More</a>}  bordered={false} >
            <Image src="https://joyfoodsunshine.com/wp-content/uploads/2020/06/banana-pancake-recipe-1x1-photo-720x720.jpg" height ="300" weight= "300"/>
            <Image src="https://joyfoodsunshine.com/wp-content/uploads/2020/06/banana-pancakes-recipe-ingredients-720x676.jpg" height ="300" weight= "300" />
            </Card>
        </Col>
        </Row>
        </div>
        </Col>
        </Content>
    <Footer > 
    <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f">
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999">
      Facebook
    </Tag>
    </Footer>
  </Layout>,
);
}


    
export default Blog;