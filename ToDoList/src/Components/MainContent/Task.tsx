import { FaCheck } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

import {
  Check,
  TaskItem,
  Trash,
  Wrapper
} from "./Tasks.styles";

type taskProps = {
  task: {
    id: number,
    text: string,
    isCompleted: boolean
  },
  handleRemoveTask: (taskId: number) => void,
  handleIsCompleteToggle: (taskId: number) => void,
}

export const Task = ({ task, handleRemoveTask, handleIsCompleteToggle }: taskProps) => {
  return (
    <TaskItem>
        <Wrapper
          isCompleted={task.isCompleted}
        >
          <Check
            isCompleted={task.isCompleted}
            onClick={() => handleIsCompleteToggle(task.id)}
          >
            {task.isCompleted && (<FaCheck size={10} />)}
          </Check>
          <p>{task.text}</p>
        </Wrapper>
        <Trash
          onClick={() => handleRemoveTask(task.id)}
        >
          <GoTrash size={15} />
        </Trash>
    </TaskItem>
  )
}