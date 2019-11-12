import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TemplateWrapper2 from '../components/Layout2';

export const BlogPostTemplate = ({
  featuredimage,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
      
      <>
      {helmet || ''}
            <div className="container-fluid" id="content-image-noticia">
                <img className="img-fluid" src={featuredimage.childImageSharp.fluid.src} alt="Responsive image" />
            </div>
            <div className="main">
                <div className="featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="h2-text text-uppercase">{title}</h1>
                                <PostContent content={content} />
                                {/* <div className="container" id="money">
                                    <p>Chapinero se caracteriza por ser una de las zonas más comerciales y con mejor ambiente
                                        nocturno de Bogotá. Actualmente, y según el ultimo censo demográfico, cuenta con 125.750
                                        habitantes, y se encuentra dividido en tres sectores urbanos: Chapinero, El Lago y
                                        Chicó. A su vez, Chapinero se divide en Alto y Central.
                                        En cuanto a los<strong> residenciales de Chapinero,</strong> esta localidad contiene:
                                    </p>
                                        <ul>
                                            <li>49,3 % Estrato 6</li>
                                            <li>15,6 % Estrato 5</li>
                                            <li>25,8 % Estrato 4</li>
                                            <li>6,7 % &nbsp Estrato 3</li>
                                            <li>1,0 % &nbsp Estrato 1</li>
                                        </ul>
                                    <br />
                                    
                                    <p>En resumen, el casi 50 % de sus habitantes son de un alto nivel económico, lo que
                                        convierte a Chapinero en una zona muy llamativa llena de grandes beneficios mercantiles,
                                        de transporte, salud, vivienda y educación.</p>
                                    <h2>Calidad de vida en Chapinero</h2>
                                    <p>En lo que respecta a servicios públicos, su cobertura de acueducto es del 99,98 %,
                                        cobertura de alcantarillado de 99,53 % y cobertura de alcantarillado pluvial 100 % </p>
                                    <p>Por otro lado, la<strong> salud</strong> en Chapinero cuenta con un alto porcentaje,
                                        específicamente el 78
                                        %, de equipamiento en sus centros asistenciales, así como una gran variedad de clínicas
                                        y hospitales a todo su alrededor, entre ellos se encuentran: IPS Sura Chapinero, Oficina
                                        de Atención Colmédica Calle 93, Centro de Control de Cáncer, CAFAM Centro Día Adulto
                                        Mayor, GAES Country, Clínica Infantil Colsubsidio, CAPS (Centro de Atención Prioritaria
                                        en Salud), DISAN (Dirección de Sanidad Ejercito), entre otros.
                                    </p>
                                    <p>En cuanto al <strong>comercio</strong> , Chapinero es conocido como el sector con más
                                        comercio de Bogotá,
                                        dado que, es catalogado como el número uno en cantidad de empresas. El comercio en
                                        Chapinero no solo está presente, sino que se ha mantenido por muchos años, ya que muchas
                                        de las empresas que allí se encuentran tienen casi 20 años.
                                        Entre los comercios de Chapinero están: Casa Comercial La Fontana, Adidas Outlet-Store,
                                        Éxito, Tigo, Casa del Músico La Colonial, Bodytech, Casa Comercial La Fontana, Carulla
                                        calle 63, Starbucks, Crepes & Waffles, Wok, Hooters Zona T, Unilago Centro de
                                        Tecnología, Centro Comercial Andino, Olímpica, Centro Comercial Av. Chile y muchos más.
                                    </p>
                                    <div className="apartament">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <a href="/">
                                                        <img className="img-fluid" src="/img/m1.png"  alt="Responsive image" />
                                                    </a>
                                                </div>
                                                <div className="col-md-4">
                                                    <a href="/">
                                                        <img className="img-fluid" src="/img/m2.png"  alt="Responsive image" />
                                                    </a>
                                                </div>
                                                <div className="col-md-4">
                                                        <a href="/">
                                                            <img class="img-fluid" src="/img/m3.png"  alt="Responsive image" />
                                                        </a>
                                                    </div>
                                                <div className="col-md-12">
                                                    <div className="botm">
                                                        <img src="/img/logo-notice.png" alt="..." />
                                                        <p className="price">APARTAMENTOS DESDE <span>$145.000.000</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <p>Otro indicador de calidad de vida en Chapinero es sin duda la educación, dado que la
                                        cantidad de familias que desean un buen colegio para sus hijos, así como jóvenes en
                                        busca de las mejores universidades, es alta, por tal motivo, Chapinero cuenta con más de
                                        35 sedes de Colegios como el Colegio Manuela Beltrán, Colegio Rosario Santo Domingo,
                                        Colegio Jordan de Sajonia, Colegio Nueva Granada, entre otros. </p>
                                    <p>Y otro tanto de Universidades, como la Universidad de la Salle, Universidad Piloto de
                                        Colombia, Politécnico Gran Colombiano, Corporación Universitaria Iberoamérica,
                                        Universidad Católica de Colombia y muchas más. En definitiva, Chapinero es después de la
                                        Candelaria la zona con más casas de estudio de Bogotá. </p>
                                    <p>Pero una localidad sin <strong> entidades financieras y gubernamentales</strong> no estaría
                                        completa, por
                                        lo que Chapinero está repleta de ellas. Banco de Occidente, Banco Caja Social,
                                        Bancolombia, AV Villas, Registraduría Chapinero, Secretaría Distrital del Ambiente,
                                        Cámara de Comercio Bogotá, SENA- Centro de servicios Financieros, BBVA, y más. </p>
                                    <p>Por otra parte, Chapinero ha sido señalada como zona de <strong>gran cultura</strong>, debido a que cuenta
                                        con numerosas academias de arte o sedes para el esparcimiento cultural, como son el
                                        Teatro Libre, Centro Filarmónico de Chapinero, Centro Cultural Paideia, Sin Visa-Centro
                                        Cultural, Centro Cultural Mexicano, Centro Cultural Gimnasio Moderno, Centro cultural
                                        Santa Cruz, Casa de la Juventud Chapinero, Centro Cultural Betancourt Meja U. Nacional,
                                        Centro Cultural Gabriel Betancourt Mejía, Centro Venezolano De Cultura Simón Bolívar,
                                        entre muchos otros.

                                    </p>
                                    <p>A si mismo, Chapinero cuenta con una inmensa programación cultural abierta a todo
                                        público, en la que se disfrutan casi que todos los días de eventos culturales y
                                        conciertos. Para mayor información sobre eventos y noticias, puede visitar <a
                                            href="http://www.chapinero.gov.co/" target="_black">www.chapinero.com</a> o <a
                                            href="https://bogota.gov.co/mi-ciudad/localidades/chapinero" target="_black">&nbsp bogota.com</a> y enterarse de todo
                                        lo que se llevará a cabo en la localidad número dos del Distrito Capital de Bogotá. </p>
                                    <p>El<strong> turismo</strong> es considerado otro indicador de calidad de Chapinero, ya que
                                        son muchos los
                                        visitantes nacionales e internacionales que buscan conocer todo lo que este sector tiene
                                        para ofrecer. Entre sus lugares públicos más reconocidos y llamativos están la Plaza de
                                        Lourdes, ubicada en la Cl. 76 #33, el Parque Los Hippies, en la Cl. 60, Parque de la 93,
                                        un lugar donde frecuentemente se realizan conciertos u otro tipo de eventos, Museo del
                                        Chicó y el Parque Virrey en la Cl. 88.</p>
                                    <p>En cuanto a <strong>zonas naturales,</strong> Quebrada la Vieja, ubicada en la Cl. 71, es
                                        un espacio de
                                        senderos ecológicos libre del ajetreo de la ciudad muy visitado por la gran vista que
                                        otorga de Bogotá. Otro sendero para turismo de naturaleza es la Quebrada Las Delicias,
                                        la cual tiene una cascada de 41 metros ideal para relajarse y disfrutar, además, es una
                                        de las mayores fuentes hídricas de la ciudad. </p>
                                    <p>Pero cuando cae la noche, Chapinero se convierte en la opción predilecta para divertirse
                                        en los mejores <strong>sitios nocturnos,</strong> como la Zona T Bogotá, la cual está
                                        repleta de bares y
                                        restaurantes con diferentes temáticas y ambientes para todos los gustos, entre ellos
                                        BBC-Bogotá Beer Company, Colombia Pub, LXF Bar, Drunken Fox, Opera Bar, y muchos más.
                                        Fuera de la zona T está Theatron, una discoteca con diferentes ambientaciones que
                                        literalmente puede albergar miles de personas, con barra libre hasta las dos de la
                                        mañana y a tan solo 50 mil pesos la entrada.
                                    </p>
                                    <p>La Movilidad <strong>(Tránsito y transporte)</strong> en Chapinero es otro punto a favor
                                        de este sector,
                                        ya que la cantidad de opciones para moverse es amplia. El Sistema Transmilenio cuenta
                                        con las estaciones Avenida 39, Calle 45, Marly, Calle 57, Calle 63, Flores, Calle 72,
                                        Calle 76, todas estás por la línea A, y con las estaciones Héroes, Calle 85, Virrey y
                                        Calle 100, por la línea B.</p>
                                    <p>De igual manera, Chapinero también es atravesado por una de las principales vías de la
                                        ciudad, como es la carrera séptima, donde se encuentra la Pontificia Universidad
                                        Javeriana, El Centro Financiero de la Avenida Chile y el Parque Museo del Chicó. </p>
                                    <h2>Chapinero Central</h2>
                                    <p>Ahora hablemos de este sector en específico, pero, ¿qué hay aquí? Chapinero Central se
                                        caracteriza por ser una buena zona rodeada de comercios claves para vivir que facilitan
                                        los quehaceres diarios, como droguerías, centros comerciales, uno de ellos el Aquarium
                                        en todo el corazón de Chapinero, y tiendas de marcas exclusivas como Arturo Calle y
                                        Aquiles </p>
                                    <p>También están a la mano Efecty y Pagatodo para recibir y realizar giros, entidades
                                        bancarias como Davivienda y Bancolombia, y para envíos Servientrega e Interrapidisimo,
                                    </p>
                                    <p>Por otra parte, la vivienda en Chapinero Central es una de las más solicitadas.
                                        Actualmente existen variedad de proyectos de viviendas donde se puede estrenar casa o
                                        apartamento a través de un crédito hipotecario. Uno de esos proyectos de vivienda es
                                        Urban 9/60, el cual está dando de qué hablar debido a sus modernos y económicos
                                        apartaestudios ubicados en la calle 60 #9-34 Chapinero Central. </p>
                                    <p>Urban 9/60 cuenta con modernas y amplias zonas comunes, coworking, gimnasio, piscina,
                                        spa, zona de mascotas, entre otros beneficios</p>
                                    <p>En definitiva, si eres de los que ha pensado en independizarse y adquirir un inmueble en
                                        una de las mejores zonas de Bogotá, ya tienes razones suficientes para dar el gran paso
                                        y vivir a lo grande en Chapinero Central.</p>
                                </div> */}
                            </div>
                            <div className="col-md-4">
                                <ul
                                  style={{boxShadow: "none"}} 
                                  className="list">
                                    <li><a href="../creditos-de-vivienda-bogota/">Créditos de vivienda: cómo comprar un apartamento en Bogotá </a></li>              
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div> */}
        </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  console.log('post :', post);
  return (
    <TemplateWrapper2>
      <BlogPostTemplate
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </TemplateWrapper2>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
