import { ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa";

import {
    Button,
    Input,
    WrapperRow
} from "./MainContent.styles";

type newTasksProps = {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    text: string,
    handleAddTask: () => void,
}

export const NewTasks = ({ handleInputChange, text, handleAddTask }: newTasksProps) => {
  return (
    <WrapperRow
        justify="start"
    >
        <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={(e) => handleInputChange(e)}
        />
        <Button
            type="button"
            onClick={handleAddTask}
        >
            Criar
            <FaPlus size={16}/>
        </Button>
    </WrapperRow>
  )
}