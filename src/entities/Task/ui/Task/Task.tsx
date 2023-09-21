import { FC } from "react";
import { Task } from "../../model/types";

const Task: FC<Task> = ({
  checked,
  title,
  description,
  timeFrom,
  timeTo,
  tag,
}) => {
  return (
    <>
      <div className="card gap-y-2 rounded-xl border-2 p-5">
        <label className="flex w-max items-center gap-x-3">
          <input
            className="checkbox"
            checked={checked}
            type="checkbox"
            name=""
            id=""
          />
          <h2 className="text-2xl font-semibold leading-none">{title}</h2>
        </label>
        <p className="text-base">{description}</p>
        <div className="flex items-center justify-between">
          <span>{timeFrom}</span>
          <span>{timeTo}</span>
        </div>
        <div>{tag}</div>
      </div>
    </>
  );
};

export default Task;
