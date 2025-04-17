interface TitleHeaderProps {
  title: string;
  sub: string;
}

const TitleHeader = ({ title, sub }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="">
          <p>{sub}</p>
        </div>
        <div>
          <h1 className="head-text">
            {title}
          </h1>
        </div>
      </div>
    );
  };
  
  export default TitleHeader;