import { HiOutlineClipboardList } from "react-icons/hi";

import { Empty } from "./MainContent.styles";

export const IsEmpty = () => {
  return (
    <Empty>
        <HiOutlineClipboardList size={56}/>
        <div>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    </Empty>
  )
}