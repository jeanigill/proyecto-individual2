import React from 'react'
import {Layout, Menu, Breadcrumb, Divider, Button, Row, Col, Image, Card, Tag, Collapse, Progress, Descriptions, Badge
,Radio, Modal, Carousel } from 'antd';
import "antd/dist/antd.css";
import "./Blog.css";
import Post from './Post';
import Title from 'antd/lib/skeleton/Title';
import {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    DownloadOutlined,
  } from '@ant-design/icons';

const{ Header, Footer, Content, Sider} = Layout;
const { Panel } = Collapse;


const posts = [
    {
        title: "AVOCADO TOAST",
        image_url:"https://i.pinimg.com/564x/b3/70/b7/b370b7db447c310d174da982fd6abe4f.jpg"
    },
    {
        title: "ENSALADA VOGUE",
        image_url: "https://css.adelgazarencasa.co/wp-content/uploads/2019/09/homemade-autumn-apple-walnut-spinach-salad-PT9QWM8.jpg",
        
    },
    {
        title: "BANANA PANCAKES",
        image_url:"https://joyfoodsunshine.com/wp-content/uploads/2020/06/banana-pancake-recipe-1x1-photo-720x720.jpg",
      }
]

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

// const text = [
//   {
//     key: 1,
//     text: "hola"
//   }
// ]

// const text = "texto"
// const text = ["texto1", "texto2"] 
// text[0]


const text = [
    {
      key: 1,
      text: "mejor estiramiento de los músculos. Una de las premisas del yoga es no forzar el cuerpo ni hacer rebotes o tirones para llegar más allá. Los músculos relajados logran un mayor estiramiento que si están en tensión, además es la mejor manera de evitar lesionarse.." 
    },
    {
      key: 2,
      text: "Cuando un músculo se estira, se vacía de sangre que es impulsada hacia el corazón. Cuando deshacemos la postura y  el músculo vuelve a su volumen normal, se llena de sangre nueva y fresca cargada de oxígeno. Lo mismo sucede en los órganos internos. Cuando hacemos una postura que los comprime se vacían de sangre, y al deshacerla se vuelven a llenar de sangre nueva."
    },
    {
      key:3,
      text: " Sumado a que la columna vertebral se vuelve más elástica, muchos de los dolores de espalda debidos a malas posturas o falta de tono muscular disminuyen significativamente, incluso pueden llegar a desaparecer totalmente. Aumenta la capacidad respiratoria y aprendemos a respirar más profundamente. Esto es bueno para todo el cuerpo, cuanto más oxígeno entra en el  mejor funciona todo."
    }
]

// text[0].text


function Blog (){
    return(
        <Layout className="layout"> 
        <Row>
        <Col span={24}>
        <Image width={180}  src="https://i.pinimg.com/564x/77/ce/21/77ce21380af2b1ccd4a52361b3f9d379.jpg" ></Image>       
        <Image width={110}  src="https://i.pinimg.com/564x/50/f8/bf/50f8bf6831278deec61eba5dd25a4ace.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/72/cd/4f/72cd4f53da5939e6fa649cbeabe64477.jpg" ></Image>
        <Image width={110}  src="https://i.pinimg.com/564x/f2/77/12/f27712ed77397860f44be3faf6560990.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/e3/61/4f/e3614f37ab58ecca48c9e6db51ea625e.jpg" ></Image>
        <Image width={110}  src="https://i.pinimg.com/originals/0b/40/f5/0b40f5c4b42245dddf91a4a1ea0fa63f.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/f2/ce/d0/f2ced034d68f6ee3709d0e28c126382c.jpg" ></Image>
        <Image width={110}  src="https://i.pinimg.com/564x/78/51/5e/78515ef499c48acd8f0d83983ebcd69e.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/a2/5c/11/a25c119e0c587bb957e99aa9cde1616c.jpg" ></Image>
        <Image width={110}  src="https://i.pinimg.com/564x/e4/d2/74/e4d2746c43c314fcdb3899b6bbb7ed9a.jpg" ></Image>
        <Image width={100}  src="https://i.pinimg.com/564x/21/59/1c/21591c279dddc8b46886ef803ae2fc09.jpg" ></Image>
        <Image width={110}  scr="https://i.pinimg.com/564x/32/dc/7c/32dc7cb9fdab953ff59418985a08c888.jpg" ></Image>
        <Divider orientation="right"> Tu compañero del día </Divider>
        </Col>    
        </Row>
        <Header >
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"> Salud </Menu.Item>
            <Menu.Item key="2" >Yoga</Menu.Item>
            <Menu.Item key="3">Rutina</Menu.Item>
            <Menu.Item key="4" >Receta</Menu.Item>
            <Menu.Item key="5" >Nosotros</Menu.Item>
          </Menu>
        </Header>
        <Content>

<div className ="site-layout-content">
        <Row>
 <Divider orientation="left">SALUD</Divider>
            <Col span={12}> <h1>¿Qué son los hábitos alimentarios saludables y por qué son importantes?</h1>
            <p>Los hábitos son acciones que se aprenden por repetición. La casa y el colegio son los lugares donde, generalmente, nuestros hijos aprenden sus conductas. Por esto, es tan importante que trabajemos articuladamente para fomentar el desarrollo de hábitos de vida saludable. En los primeros años de vida, los niños aprenden por imitación y por esto, una herramienta clave para ayudarles a desarrollar hábitos es a través de nuestro ejemplo. Por ejemplo, la evidencia nos muestra que cuando el padre o madre incluyen una fruta o verdura en su dieta diaria, los hijos tenderán a comer media porción de fruta o verdura más al día (Haire-Joshu, Elliot, Caito, et. al., 2008). Así mismo, tanto en cada como en el colegio, es muy importante que regulemos el tipo de alimentos que ponemos a su disposición, pues si solo tienen acceso a productos ultraprocesados, no existirá motivación para consumir alimentos saludables esenciales para su crecimiento.envejecimiento saludable. El aislamiento social puede llevar a un deterioro gradual e irreversible de las capacidades físicas y mentales, incluso a la incapacidad física y la demencia.
            </p></Col>
            <Col span={12}> <Image 
            src="https://www.vallesdelsol.cl/wp-content/uploads/2020/08/menu-semanal-saludable5_56e25094_1280x961.jpg" width={600}  height = {400}      
            /> </Col> 
     
     
  <Divider orientation="right">#INFO VOGUE</Divider> 
            <Col span={10}> <Image src="https://i.pinimg.com/564x/b5/15/ff/b515ffd038e92759dac9417536f44a32.jpg" width={446}  height = {667} 
             /> 
            </Col>
            <Col span={14}> <h1>¿Es malo practicar Yoga?</h1>
            <p>"Vivimos en tiempos en que se está revalorizando la importancia de comer sano y hacer deporte. 
            Creo que algunas de mis amistades practican yoga en esta línea. También, la vida cotidiana nos hace andar envueltos de un jaleo acelerado, entre tanto barullo es importante serenar la mente y desintoxicarla de preocupaciones, ansiedades y agobios. 
            Dentro de los múltiples pendientes del día a día, algunos encuentran en el yoga el momento y el espacio para hacer este alto en el camino Hay algunos consejos iniciales muy importantes si quieres empezar a hacer estas sesiones de Yoga en casa para principiantes. 
            Si no las sigues, es posible que la práctica se vea afectada negativamente, y que realices mal las asanas, o pierdas la motivación. Por ejemplo, si te recomiendo realizar la respiración de una manera, que es la adecuada para esa asana, y tú piensas que no es relevante, te costará más el ejercicio. Piensa que uno de los ejercicios más conocidos del Yoga, el Saludo al Sol, se realiza expulsando el aire en el primer movimiento, Pranamasana, se respira en el segundo, en el tercero se vuelve a expulsar… </p>
            <p>El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general. El yoga se desarrolló como una práctica espiritual hace miles de años. Hoy en día la mayoría de las personas en occidente hace yoga como ejercicio y para reducir el estrés.</p>
            <h2>Algunos beneficios del yoga</h2>
            <br></br>
            <div>
            <Collapse accordion>
            <Panel header="Flexibilidad" key="1">
              <p>{text[0].text}</p>
            </Panel>
            <Panel header="Mejor circulación" key="2">
              <p>{text[1].text}</p>
            </Panel>
            <Panel header="Fortalece los músculos y aumenta la densidad ósea" key="3">
              <p>{text[2].text}</p>
            </Panel>
          </Collapse>
           </div>
           <br></br>
           <h2>Para iniciar las clases de Yoga te recomendamos</h2>
           <Button type="link"> {<a href="https://www.gaia.com/video/reignite-your-routine?language[]=es">Ver más</a>} </Button>
            </Col>  

  <Divider orientation="left">#RUTINA</Divider>
            <Col span={16}> <h1>Una rutina para aprovechar al máximo tu semana</h1> 
            <div>
            <Descriptions title="Rutina de la semana" bordered>
            <Descriptions.Item label="Lunes" span={2}> 
            <Badge status="success" text="Calentamiento 5-10min" />
            <br></br>
            <Badge status="processing" text="Running 10km" />
            </Descriptions.Item>
            <Descriptions.Item label="Martes" span={2}>
            <Badge status="success" text="Calentamiento 5-10min" />
            <br></br>
            <Badge status="error" text="Piernas" />
            </Descriptions.Item>
            <Descriptions.Item label="Miercoles" span={2}>
            <Badge status="success" text="Calentamiento 5-10min" />
            <br></br>
            <Badge status="default" text="Abs 10min" />
            </Descriptions.Item>
            <Descriptions.Item label="Jueves" span={2}>
            <Badge status="success" text="Calentamiento 5-10min" />
            <br></br>
            <Badge status="warning" text="Brazo 10min" />
            </Descriptions.Item>
            <Descriptions.Item label="Viernes" span={2}>
            <Badge status="processing" text="Yoga" />
            </Descriptions.Item>
            <Descriptions.Item label="Sabado" span={3}>
            <Badge status="processing" text="Running" /> </Descriptions.Item>
            </Descriptions>
            <Button type="primary" icon={<DownloadOutlined />} size={"large"}>
            Download rutina
            </Button>
            <br></br> <br></br>  <br></br>  <br></br>
            </div>
            <h2>Tu progreso:</h2>
            <div>
            <Progress type="circle" percent={10} format={percent => `${percent} Days`} />
            <Progress type="circle" percent={100} format={() => 'Done'} />
            </div>
            </Col>
            <Col span={8}> 
            <Image src="https://i.pinimg.com/564x/a8/fa/c6/a8fac6fd0cbfa519cb20560f3d73c19b.jpg" width={446}  height = {667}      
             /> <Button type="link"> {<a href="https://www.nike.com/ntc-app">Descargar la app</a>} </Button> </Col> 
            </Row>
            </div> 
  <Divider orientation="right">#INSPIRACION</Divider>
          <Carousel autoplay>
            <div>
            <Image src="https://i.pinimg.com/564x/05/ab/c7/05abc7c4fdcfafdc7761a9d3522fc215.jpg" width={400}  height = {400} />
            <Image src="https://i.pinimg.com/564x/d7/fd/67/d7fd6771986ccd70ac01bf2fa71833ad.jpg" width={446}  height = {667} />
            <Image src="https://i.pinimg.com/564x/dc/e6/e7/dce6e701850cca17f2f1b4504a129241.jpg" width={446}  height = {667} />
            </div>
            <div>
            <Image src="https://i.pinimg.com/564x/0e/5c/82/0e5c82009b9d42cecf694e4936cc7ed2.jpg" width={400}  height = {400} />
            <Image src="https://i.pinimg.com/564x/1e/af/2f/1eaf2fe66dc92f32dba58e0182d34c2e.jpg" width={446}  height = {667} />
            <Image src="https://i.pinimg.com/564x/aa/62/7d/aa627dfd760feb80d62679ac2dcd4dbb.jpg" width={446}  height = {667} />
            </div>
            <div>
            <Image src="https://i.pinimg.com/564x/20/cb/03/20cb034fb03e0599cf3ae3b9db3abbde.jpg" width={400}  height = {400} />
            <Image src="https://i.pinimg.com/564x/9d/05/10/9d05109fb81825bdfc00bff07d0511f3.jpg" width={400}  height = {400} />
            <Image src="https://i.pinimg.com/564x/59/8f/d7/598fd769c4e7faa417012687b962daa1.jpg" width={400}  height = {400} />
            </div>
            </Carousel>

  <Divider orientation="right">#RECETAS</Divider>
          <div className="site-card-wrapper">
          <Row grutter={16}>
          {posts.map(post => {
            return (
              <Post post={post}/>
              )
          })}
          </Row>
{/*             <Row gutter={16}>
              <Col span={8}>
                <Card title="AvOCADO TOAST" extra={<a href="https://www.youtube.com/embed/WDRujOJVykE">More</a>} bordered={false}>
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
            </Row> */}
          </div>
            </Content>        
            <br></br> <br></br>
        <Footer > 
        <Divider orientation="center">Asunción, Paraguay</Divider>
        <div>
        <h1>Seguinos en las redes</h1>
        </div>
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
  </Layout>
);
}


export default Blog;