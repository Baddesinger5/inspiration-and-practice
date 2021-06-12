import React, {useState, useEffect} from 'react';
import AddBtn from './components/addBtn/AddBtn';
import DeleteWarning from './components/deleteWarning/DeleteWarning';
import EditWarning from './components/editWarning/EditWarning';
import MainContent from './components/mainContent/MainContent';
import NewTask from './components/newTask/NewTask';
import Overlay from './components/overlay/Overlay';
import WasCreated from './components/wasCreated/WasCreated';
import EditWindow from './editWindow/EditWindow';
import '../src/components/mainContent/leftSide/LeftSide.css';
import ValidateWarning from './components/validateWarning/ValidateWarning';

//все что на англ написано, думаю все понятно
//далее па рузке

function App() {

  //for check if empty local
  useEffect(() => {
    getFromLocal(); //запускаем функцию, если пустой массив в хранилище
  }, [])

  const [titleValue, setTitleValue] =  useState(''); //title value
  const [shortDescValue, setShortDescValue] = useState('') // shortdesc value
  const [textArea, setTextArea] = useState('') // textArea value
  const [allTasks, setAllTasks] = useState([]) // all tasks here

  const [closeModal, setCloseModal] = useState(false) // close new task modal
  const [confirmTask, setConfirmTask] = useState(false); //confirm modal

  const [ modalData, setModalsData ] = useState(null); //for rightside modals
  const [warning, setWarning] = useState(false); // warning window when delete task

  const [editWindow, setEditWindow]= useState(false) // for show editing window
  const [newTitleValue, setNewTitleValue] =  useState(''); //new title value
  const [newShortDescValue, setNewShortDescValue] = useState('') // new shortdesc value
  const [newTextArea, setNewTextArea] = useState('') // new textArea value

  const [editWarning, setEditWarning] = useState(false); //when you edit task window
  const [validate, setValidate] = useState(false) //validate window if some inputs are empty

  //for local storage saving
  function setToLocal() {
    localStorage.setItem('tasks', JSON.stringify(allTasks));   //создаем поле для хранения и переводим в строку наш стейст с тасками
  }

  function getFromLocal() {
    if (localStorage.getItem('tasks') === null) { //проверяем, если при получении массива с тасками там пусто
      localStorage.setItem('tasks', JSON.stringify([])); //то мы создаем массив с тасками и преобразуем в строку пустой массив
    } else {
      let checking = JSON.parse(localStorage.getItem('tasks')); //если не пусто, то парсим внутри содержимое, затем получаем поле с тасками
      setAllTasks(checking); //закидываем в стейт полученные в созданном хранилище таски
    }
  }

  useEffect( () => {
    setToLocal(); //тут мы создаем поле для хранения 
  }, [allTasks]) //если меняется стейт с тасками
  // end of for local storage saving

  return (
    <div className="App">
      <MainContent  
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            modalData={modalData}
            setModalsData={setModalsData}
            warning={warning}
            setWarning={setWarning}
            editWindow={editWindow} 
            setEditWindow={setEditWindow}
      />

      {closeModal ? <NewTask 
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            shortDescValue={shortDescValue}
            setShortDescValue={setShortDescValue}
            textArea={textArea}
            setTextArea={setTextArea}
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            closeModal={closeModal}
            setCloseModal={setCloseModal}
            confirmTask={confirmTask}
            setConfirmTask={setConfirmTask}
            setValidate={setValidate}
      />     : null
      }
      
      
      <AddBtn closeModal={closeModal} setCloseModal={setCloseModal} />
      {closeModal ? <Overlay /> : null}


      {confirmTask ? <WasCreated  confirmTask={confirmTask} setConfirmTask={setConfirmTask} /> : null}
      {confirmTask ? <Overlay /> : null}


      {warning ? <DeleteWarning modalData={modalData} setModalsData={setModalsData} setWarning={setWarning} allTasks={allTasks} setAllTasks={setAllTasks}/> : null}
      {warning ? <Overlay /> : null}

      {editWindow ? <EditWindow 
                            allTasks={allTasks} 
                            setAllTasks={setAllTasks} 
                            setEditWindow={setEditWindow}
                            newTitleValue={newTitleValue}
                            setNewTitleValue={setNewTitleValue}
                            newShortDescValue={newShortDescValue}
                            setNewShortDescValue={setNewShortDescValue}
                            newTextArea={newTextArea}
                            setNewTextArea={setNewTextArea}
                            setModalsData={setModalsData}
                            modalData={modalData}
                            setEditWarning={setEditWarning}
      /> : null}
      {editWindow ? <Overlay /> : null}


      {editWarning ? <EditWarning setEditWarning={setEditWarning} /> : null}
      {editWarning ? <Overlay /> : null}
      
      {validate ? <ValidateWarning setValidate={setValidate} setCloseModal={setCloseModal}/> : null}
      {validate ? <Overlay /> : null}
      
        {/* про передачу пропсов писать не буду, думаю и так понятно все */}
    </div>
  );
}

export default App;
