import React, { useState } from 'react'
import axios from 'axios'

const Contenido = () => {

  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [barrio, setBarrio] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [telefono, setTelefono] = useState('')
  const [celular, setCelular] = useState('')
  const [correo, setCorreo] = useState('')
  const [curso, setCurso] = useState('')
  const [imagenes, setImagenes] = useState('')

  const submitHander = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/formulario', {
      nombres,
      apellidos,
      direccion,
      correo,
      curso,
      barrio,
      ciudad,
      departamento,
      telefono,
      celular,
      imagenes

    }).then((res) => {
      console.log(res);

    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className='d-flex  justify-content-center'>
      <div className='col-5 '>

        <form onSubmit={submitHander} >
          <h1> Formulario de Inscripciòn</h1>
          <div className='d-flex'>
            <div>
              <div className="form-group">
                <label >Nombres</label>
                <input type="text" className="form-control" placeholder="Nombres" onChange={(e) => setNombres(e.target.value)} />
              </div>

              <div className="form-group">
                <label >Apellidos</label>
                <input type="text" className="form-control" placeholder="Nombres" onChange={(e) => setApellidos(e.target.value)} />
              </div>

              <div className="form-group">
                <label >Barrio</label>
                <input type="text" className="form-control" placeholder="Barrio" onChange={(e) => setBarrio(e.target.value)} />
              </div>

              <div className="form-group">
                <label >Direccion</label>
                <input type="text" className="form-control" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)} />
              </div>
              <div className="form-group">
                <label >Ciudad</label>
                <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCiudad(e.target.value)} />
              </div>


            </div>
            <div>

              <div className="form-group">
                <label >Departamento</label>
                <input type="text" className="form-control" placeholder="Departamento" onChange={(e) => setDepartamento(e.target.value)} />
              </div>

              <div className="form-group">
                <label >Telefono</label>
                <input type="text" className="form-control" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
              </div>
              <div className="form-group">
                <label >Celular</label>
                <input type="text" className="form-control" placeholder="Celular" onChange={(e) => setCelular(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setCorreo(e.target.value)} />
              </div>

              <div className="form-group">
                <label >Curso</label>
                <input type="text" className="form-control" placeholder="Curso" onChange={(e) => setCurso(e.target.value)} />
              </div>

              <div class="mb-3">
                <label htmlFor="formFileMultiple" class="form-label">Fotos de cedula ambas caras</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple onChange={(e) => setImagenes(e.target.value)} />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contenido
