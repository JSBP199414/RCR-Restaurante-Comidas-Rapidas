//1.Invocamos a express
const express = require("express");
const app = express();

//2.Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3.Invocamos a dotenv
const dotenv = require("dotenv");
dotenv.config({path:'./env/.env'})

//4.El directorio public
app.use('/public', express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

//5.Establecemos el motor de las plantillas
app.set('view engine', 'ejs');

//6.Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7.Var de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));

//8.Invocamos a la conexion de BD
const connection = require('./dataBase/db');

//9.Estableciendo las rutas
app.get('/promociones',(req,res)=>{
  res.render('promociones')
})
app.get('/tiendas',(req,res)=>{
  res.render('tiendas')
})
app.get('/ingresar',(req,res)=>{
  res.render('ingresar')
})
app.get('/registrarse',(req,res)=>{
  res.render('registrarse')
})
app.get('/trabajaConNosotros',(req,res)=>{
  res.render('trabajaConNosotros')
})
app.get('/empresa',(req,res)=>{
  res.render('empresa')
})
app.get('/canvas',(req,res)=>{
  res.render('canvas')
})
app.get('/pedidos',(req,res)=>{
  res.render('pedidos')
})
//10.Registrarse
app.post('/registrarse', async (req,res)=>{
  const nombres = req.body.nombre;
  const apellido = req.body.apellido;
  const celular = req.body.celular;
  const email = req.body.email;
  const contrasena = req.body.password;
  const contrasenaDos = req.body.passwordDos;
  if (contrasena == contrasenaDos) {
      let passwordHass = await bcryptjs.hash(contrasena,8);
      connection.query('INSERT INTO usuarios SET ?',{nombres:nombres, apellidos:apellido, celular:celular, email:email, contraseña:passwordHass}, async(error,result)=>{
          if (error) {
              console.log('Consola error!!! ' + error);
          }else{
              res.render("registrarse", {
                  alert:true,
                  alertTitle:"Registro",
                  alertMessage: "Registro exitoso!!!",
                  alertIcon:"success",
                  showConfirmButton:true,
                  timer:3000,
                  ruta:'registrarse'
              });
          }
      })
      
  }else{
      res.render("registrarse", {
          alert:true,
          alertTitle:"Error de contraseña",
          alertMessage: "Contraseñas no corresponden!!!",
          alertIcon:"warning",
          showConfirmButton:false,
          timer:3000,
          ruta:'registrarse'
      });
  }
  
})
//11.Autotenticacion
app.post('/ingresar', async (req,res) => {
  const mail= req.body.email;
  const pass = req.body.password;
  let passwordHass = await bcryptjs.hash(pass,8);
  if (mail && pass) {
      connection.query('SELECT * FROM usuarios  WHERE email = ?',[mail], async(error, result)=>{
  
              if (result.length == 0 || !(await bcryptjs.compare(pass, result[0].contraseña))) {
                  res.render("ingresar", {
                      alert:true,
                      alertTitle:"Error",
                      alertMessage: "Usuario y/o contraseña incorrectas!!!",
                      alertIcon:"error",
                      showConfirmButton:true,
                      timer:3000,
                      ruta:'ingresar'
                  });
              }else{
                  req.session.loggedin = true;
                  req.session.name = result[0].nombres
                  res.render("ingresar", {
                      alert:true,
                      alertTitle:"Conexion",
                      alertMessage: "Conexion exitosa!!!",
                      alertIcon:"success",
                      showConfirmButton:false,
                      timer:3000,
                      ruta:''
                  });
              }  
         
      })
  }else{
      res.render("ingresar", {
          alert:true,
          alertTitle:"Advertencia",
          alertMessage: "Por favor ingrese un email y/o contraseña!!!",
          alertIcon:"warning",
          showConfirmButton:false,
          timer:3000,
          ruta:'ingresar'
      });
  } 
  
  })

//12.Autotenticacion paginas
app.get('/',(req,res)=>{

  if (req.session.loggedin) {
      res.render('index',{
          login: true,
          name: req.session.name
      });
  }else{
      res.render('index',{
          login: false,
          name:'Debe iniciar sesion'
      });
  }
})
app.listen(3000,(req,res)=>{
  console.log('Server running at port http://localhost:3000');
  })
  
