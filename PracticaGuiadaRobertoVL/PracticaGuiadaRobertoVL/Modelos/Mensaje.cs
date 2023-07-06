namespace PracticaGuiadaRobertoVL.Modelos
{
    public class Mensaje
    {
        public string Nombre { get; set; }
        public int Edad { get; set; }  
        public Mensaje(string NombreIn, int EdadIn)
        {
            Nombre = NombreIn;
            Edad = EdadIn;
        }
        //Practica propiedades en clase eprsona o heredada, clase padre
        //y de la clase heredada 
        //Objetivo de la practica, clase principal, una hijo y utilizar
        //la que tiene la herencia, recibir N cantidad de paramtero,
        //y en un mensaje devolver el contenido de la clase heredada
        //En este caso personaPueso, no clase principal,sino la heredada
        //Devolver todas las propiedades con herencioa

    }
}
