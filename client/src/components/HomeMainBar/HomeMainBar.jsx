import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


import './HomeMainBar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'


const HomeMainBar = () => {

  const location = useLocation()
  const navigate = useNavigate();
  const user = 1;


  const questionList = useSelector(state => state.questionsReducer)
  // console.log(questionList)


  // var questionLists = [{
  //   id : 1,
  //   upVotes : 3,
  //   downVotes:2,
  //   noOfAnswers : 2,
  //   questionTitle : "What is a function ?",
  //   questionBody : "It meant to be",
  //   questionTags : ["java", "nodejs", "react js", "mongodb"],
  //   userPosted : "mano",
  //   userId : 1,
  //   askedOn : "Jan 1",
  //   answer : [{
  //     answerBody : "Answer",
  //     userAnswered : "Kumar",
  //     answeredOn : "jan 2",
  //     userId : 2,
  //   }]
  // },
  // {
  //   id : 2,
  //   upVotes : 3,
  //   downVotes:2,
  //   noOfAnswers : 0,
  //   questionTitle : "What is a function ?",
  //   questionBody : "It meant to be",
  //   questionTags : ["javascript", "R", "Python"],
  //   userPosted : "mano",
  //   userId : 1,
  //   askedOn : "Jan 1",
  //   answer : [{
  //     answerBody : "Answer",
  //     userAnswered : "Kumar",
  //     answeredOn : "jan 2",
  //     userId : 2,
  //   }]
  // },
  // {
  //   id : 3,
  //   upVotes : 3,
  //   downVotes:2,
  //   noOfAnswers : 0,
  //   questionTitle : "What is a function ?",
  //   questionBody : "It meant to be",
  //   questionTags : ["javascript", "R", "Python"],
  //   userPosted : "mano",
  //   userId : 1,
  //   askedOn : "Jan 1",
  //   answer : [{
  //     answerBody : "Answer",
  //     userAnswered : "Kumar",
  //     answeredOn : "jan 2",
  //     userId : 2,
  //   }]
  // }]

  const checkAuth = () =>{
    if(user === null) {
      alert("login or signup to ask a question !");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion');
    }
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        { 
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1> 
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ?
          <h1>Loading ... </h1> : 
          <>
            <p>{ questionList.data.length } questions</p>
            <QuestionList questionList = {questionList.data} />
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainBar
