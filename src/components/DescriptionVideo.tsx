interface LessonPropos {
    title: string;
    description: string;
}

export function DescriptionVideo(props: LessonPropos){
    return (
        <div className="w-[46rem]">
            <strong>
                {props.title}
            </strong>
            <p>
            {props.description}
            </p>
        </div>
    )
}