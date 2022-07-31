import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType // 'union type' объединяем типы

// constants
const defaultAffairs: Array<AffairType> = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // тип параметров на выход желительно указывать
    if (filter === 'all') return affairs // если входящие параметры с фильтра 'all' - рисуем все элементы
    else return affairs.filter((e) => e.priority === filter) // иначе еще раз фильтруем и выводим то что получаем от filter
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(e => e._id !== _id) // проходим фильтром и и рисуем все, что не пришедший _id
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // начальное состояние [ {} ]
    const [filter, setFilter] = useState<FilterType>('all') // начальное состояние фильтра

    const filteredAffairs = filterAffairs(affairs, filter) // кладем в переменную вызванную F с начальными состояниями в параметры

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // не понял как работает....(

    return (
        <div>
            <hr />
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    )
}

export default HW2
