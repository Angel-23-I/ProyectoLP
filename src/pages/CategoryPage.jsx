import React, { useEffect, useState } from "react";
import { Question } from "../components/Questionimg";
import { useParams } from "react-router-dom";
import { questions, imgs } from "../data2";

//Funcion para barajar las preguntas de cada categoria y tambien reducirlas al numero de 5
const shuffleArray = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 6);
};


export const CategoryPage = () => {

    //Leer el parametro de la URL
    const { category } = useParams();
    console.log(category);

    const [imgCategory] = imgs.filter(
		img => img === `/images/${category.toLowerCase()}.png`
	);
    console.log(imgCategory);

    const [questionsFiltered, setQuestionsFiltered] = useState(questions.filter(question => question.category === category));

    const [indexQuestion, setIndexQuestion] = useState(0);
    const [activeQuiz, setActiveQuiz] = useState(false);


    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
    }, []);

    return (
    <div 
        className="container mx-auto flex flex-col items-center justify-center gap-10 bg-gray-300"
        style={{ height: 'calc(100vh - 5rem)'}}
    >
        {activeQuiz ? (<Question 
            filteredQuestion={questionsFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion} 
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered}
            setActiveQuiz={setActiveQuiz}
        />) : (
            <>
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-teal-900 text-center font-bold">
                    { category }
                </h1>

                <div className="flex justify-center items-center">
                    <img src={imgCategory} alt={category} className="w-72" />
                </div>
            </div>

            <button className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-shadow-gray-900"
            onClick={() => setActiveQuiz(true)}>
                Iniciar Quiz
            </button>
            </>
        )}
        

    </div>
    );
};