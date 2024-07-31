import {
  ChangeEvent,
  useCallback,
  useState
} from "react";

import {
  Container,
  WrapperRow,
  Content,
  SpanContainer,
  Info,
  Counter,
  Tasks,
  Message,
} from "./MainContent.styles";

import { NewTasks } from "./NewTasks";
import { IsEmpty } from "./IsEmpty";
import { Task } from "./Task";

export type taskProps = {
  id: number,
  text: string,
  isCompleted: boolean
}

type messageProps = {
  type: string
  text: string
}

export const MainContent = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<taskProps[]>([
    {
      id: 1,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true
    },
  ]);
  const [message, setMessage] = useState<messageProps | null>(null);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleAddTask = () => {
    if(!text){
      setMessage({
        type: 'error',
        text:'Preencha o Campo.'
      });
      setTimeout(() => {
        setMessage(null);
      }, 2500);
      return;
    }

    const existingTask = tasks.find((task) => task.text === text);

    if(existingTask) {
      setMessage({
        type: 'error',
        text:'Task Já Existe.'
      });
      setTimeout(() => {
        setMessage(null);
      }, 2500);
      return;
    }

    setTasks((prevTasks) => [...prevTasks, {
      id: Math.ceil(Math.random() * 1000),
      text,
      isCompleted: false
    }]);

    setText('');
  }

  const handleRemoveTask = useCallback((taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(filteredTasks);

    setMessage({
      type: 'success',
      text:'Task Removida.'
    });
    setTimeout(() => {
      setMessage(null);
    }, 2500);
  }, [setTasks, tasks]);

  const handleIsCompleteToggle = useCallback((taskId: number) => {
      const currentTask = tasks.find((task) => task.id === taskId);
      
      if(!currentTask){
        return;
      }

      setTasks((tasks) => tasks.map((task) => 
        task.id === taskId ? 
        {...task, isCompleted: !task.isCompleted} 
        :
        task
      ));
      
  }, [tasks]);

  return (
    <Container>
        <NewTasks
          handleInputChange={handleInputChange}
          text={text}
          handleAddTask={handleAddTask}
        />
        {message && (
          <Message
            error={message.type === 'error'}
            success={message.type === 'success'}
          >
            {message.text}
          </Message>
        )}
        <Content>
            <Info>
              <WrapperRow
                justify="start"
              >
                <SpanContainer
                  variant={'blue'}
                >
                  Tarefas criadas
                </SpanContainer>
                <Counter>
                  {tasks.length}
                </Counter>
              </WrapperRow>
              <WrapperRow
                justify="end"
              >
                <SpanContainer
                  variant={'purple'}
                >
                  Concluídas
                </SpanContainer>
                <Counter
                  large={tasks.length > 0}
                >
                  {tasks.length > 0 ? 
                    (<span>{tasks.filter((task) => task.isCompleted).length} de {tasks.length}</span>)
                    :
                    (tasks.length)
                  }
                </Counter>
              </WrapperRow>
            </Info>
            {tasks.length <= 0 ? (
                <IsEmpty />
              )
              :
              (
                <Tasks
                  tasksLength={tasks.length}
                >
                  {tasks
                  .sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted))
                  .map((task) => (
                    <Task
                      key={task.id}
                      task={task}
                      handleRemoveTask={handleRemoveTask}
                      handleIsCompleteToggle={handleIsCompleteToggle}
                    />
                  ))}
                </Tasks>
              )
            }
        </Content>
    </Container>
  )
}