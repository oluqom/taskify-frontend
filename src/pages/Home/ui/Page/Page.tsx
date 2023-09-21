import { Task } from "@/entities";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col gap-y-3 py-5">
            <Task
              checked={true}
              title={"Task"}
              description={
                "Praesent quis luctus risus. Nunc laoreet quam eu justo pharetra condimentum."
              }
              timeFrom={"21.09.23 - 10:00"}
              timeTo={"21.09.23 - 21:00"}
              tag={"yellow"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
