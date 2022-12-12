import { Link } from "react-router-dom";

export default function Pokemon({props}){
return(     
   <>
     <Link to='/'> <p>Voltar</p></Link>
     <h1>
        Bem vindo a pagina do pokemon:
    {props}
     </h1>
     
   </>
);
}
