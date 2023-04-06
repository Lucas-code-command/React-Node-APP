import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


function App() {
  return (
   <div>
    <div class="container">
    <nav class="navbar">
      <ul>
        <li><Link to='/forms'>Forms</Link></li>
        <li><Link to='/country'>country api</Link></li>
      </ul>
    </nav>
        {/* Row */}
        <div class="row row-cols-1 gy-2 row-cols-md-3">
          <div class="col"> <div class="box" style={{backgroundColor:"black"}}>col1</div> </div>
          <div class="col"> <div class="box" style={{backgroundColor:"blue"}}>col2</div> </div>
          {/*Exemplo de row dentro de col */}
          <div class="col">
            <div class="row">
                <div class="col"><div class="box" style={{backgroundColor:"green"}}>row inside row</div></div>
                <div class="col"><div class="box" style={{backgroundColor:"green"}}>row inside row</div></div>
            </div>
          </div>
          {/*Fim do exemplo */}
        </div>
    </div> {/**Fim do Container1 */}

    <div class="container">
      <h1>Dicionário Bootstrap</h1>
      <div class='table-responsive'>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>h2</th>
              <th>h3</th>
              <th>h3.2</th>
              <th>h3.3</th>
            </tr>
          </thead>
          <tbody class="table-secondary">
            <tr>
              <td>Row</td>
              <td>Podemos juntar rows dentro de rows e dentro de rows</td>
              <td>Mas a row child deve estar dentro de uma coluna</td>
              <td> </td>
            </tr>
            <tr>
              <td>COL</td>
              <td>Vai de 1 a 12 colunas e </td>
              <td>Se for auto ela se adapta ao texto</td>
              <td> </td>
            </tr>
            <tr>
              <td>Offset-3</td>
              <td>espaçamento da coluna 3 colunas para o lado </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>G-2</td>
              <td>especificar o gap quando se tem um item em cima do outro; </td>
              <td>vai de 0 a 5;</td>
              <td>pode ser usado no eixo X e Y com:gy e gx, ou apenas como g para x E Y</td>
            </tr>
            <tr>
              <td>Tamanho da tela</td>
              <td>se especificar o tamanho da tela, ela vai funcionar da especificação para telas maiores</td>
              <td>col-lg-4, vai deixar a coluna como 4 colunas de tamanho em telas grandes(large);</td>
              <td> </td>
            </tr>
            <tr>
              <td>Table-</td>
              <td>striped deixa uma linha de cada cor</td>
              <td>hover = quando vc passa o mouse em cima da linha ela fica diferente</td>
              <td>active = Mantem uma linha "grifada" </td>
            </tr>
            <tr>
              <td>Forms</td>
              <td>form-control em input pode ser usado como sm e lg para aumentar o tamanho da caixa de texto</td>
              <td>em input pode colocar disabled ou readonly e passar um valor</td>
            </tr>
          </tbody>
        </table>
      </div>
      

    </div>{/**Fim do Container2 */}

    <div class="container">
      <div class="row">
        <div class="col"><button><a href="https://www.youtube.com/watch?v=Jyvffr3aCp0" target="_blank">Curso que estava fazendo</a></button></div>
        <div class="col"><h1>Parei em:</h1></div>
        <div class="col"><h2>35:00</h2></div>
      </div>
    </div>

    </div>
  );
}

export default App;
