namespace PracticaGuiadaRobertoVL.Modelos
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }

    public class Student : Person
    {
        public string StudentId { get; set; }
        public string School { get; set; }
    }
    
}
