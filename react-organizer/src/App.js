import React, {useState, useEffect} from 'react';
import AddBtn from './components/addBtn/AddBtn';
import DeleteWarning from './components/deleteWarning/DeleteWarning';
import EditWarning from './components/editWarning/EditWarning';
import MainContent from './components/mainContent/MainContent';
import NewTask from './components/newTask/NewTask';
import Overlay from './components/overlay/Overlay';
import WasCreated from './components/wasCreated/WasCreated';
import EditWindow from './editWindow/EditWindow';


function App() {

  //for check if empty local
  useEffect(() => {
    getFromLocal();
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

  //for local storage saving
  function setToLocal() {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }

  function getFromLocal() {
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      let checking = JSON.parse(localStorage.getItem('tasks'));
      setAllTasks(checking);
    }
  }

  useEffect( () => {
    setToLocal();
  }, [allTasks])

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
      
    </div>

    
  );
}

export default App;

//валидацию на пустые поля
//ограничение на ввод символов в первом и втором инпуте
//в кнопке подтверждения создания поправить текст