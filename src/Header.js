import React, {Component} from 'React';
import './App.css';
class Header extends Component{
    render(){
         return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light animate__animated animate__backInDown">
          <a class="navbar-brand" href="#">Mohamed</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <img class="image2 animate__animated animate__backInDown animate__delay-1s " src="images/blue_bg.png" width="100%" height="500px" alt=""/>
        <img class="image9 animate__animated animate__backInDown animate__delay-2s " src="images/u.jpg" width="20%" height="300px" alt=""/>
        <h1 class="h1 animate__animated animate__backInLeft animate__flash  animate__delay-3s ">Front End Developer</h1>

      </header>
    </div>
  );
    }
}

export default App;
