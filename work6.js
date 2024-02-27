const RB=ReactBootstrap;
const {Alert, Card, Button, Table} = ReactBootstrap;


class App extends React.Component {
    title = (
      <Alert variant="info">
        <b>Work6 :</b> Firebase
      </Alert>
    );
    footer = (
      <div>
        By xxxxxxxxxx-x xxxxxxxxxxxxx xxxxxxxxxxxxxx <br />
        College of Computing, Khon Kaen University
      </div>
    );
    state = {
        scene: 0,
    }      
    render() {
      return (
        <Card>
          <Card.Header>{this.title}</Card.Header>  
          <Card.Body></Card.Body>
          <Card.Footer>{this.footer}</Card.Footer>
        </Card>          
      );
    }      
  }


  const container = document.getElementById("myapp");
  const root = ReactDOM.createRoot(container);
  const firebaseConfig = {
    apiKey: "AIzaSyBm3Zr_NekZfzl59GmzwRq1kHCaqVQWeUc",
    authDomain: "web2566-ea757.firebaseapp.com",
    projectId: "web2566-ea757",
    storageBucket: "web2566-ea757.appspot.com",
    messagingSenderId: "1095201282143",
    appId: "1:1095201282143:web:1500bcda33d961faada3ea",
    measurementId: "G-46SX2V8631"
  };
  firebase.initializeApp(firebaseConfig);      
const db = firebase.firestore();
db.collection("students").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`,doc.data());
  });
});
  root.render(<App />);