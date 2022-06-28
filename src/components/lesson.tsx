import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonPropos {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonPropos){

    const { slug } = useParams<{ slug: string }>()

    const isavailableAt = isPast(props.availableAt)
    const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm'm'", {locale: ptBR})

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span>
                {availableDateFormated}
            </span>
            
            <div className={classNames (`border border-gray-500 rounded p-4 mt-2 group-hover:border-green-300 `,{
                'bg-green-500': isActiveLesson,
            })}>
                <header className="flex items-center justify-between">
                    
                    {isavailableAt ? (
                        <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2', {
                            'text-white': isActiveLesson
                        })}>
                            <CheckCircle size={20}/>
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            EM breve
                        </span>
                    )}

                    {isavailableAt ? (
                        <span className={classNames('text-xs rounded px-2 py-[0.125rem] border border-green-300 font-bold', {
                            'border-white': isActiveLesson
                        })}>
                            {props.type === 'live' ? "AO VIVO" : 'AULA PRÁTICA'}
                        </span>
                    ) : (
                        <span className="text-xs text-green-300 rounded px-2 py-[0.125rem] border border-green-300 font-bold">
                            {props.type === 'live' ? "AO VIVO" : 'AULA PRÁTICA'}
                        </span>
                    )
                    }
                </header>
                <strong className={classNames('mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}