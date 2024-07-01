import Link from "next/link";

export const getSemAbbr = (sem) => {
  let abbr = sem + "";
  switch (sem) {
    case 1:
      abbr += "st";
      break;
    case 2:
      abbr += "nd";
      break;
    case 3:
      abbr += "rd";
      break;
    default:
      abbr += "st";
  }
  return abbr;
};

const SolutionsListItem = ({ data, ...rest }) => {
  return (
    <div
      className="grid grid-cols-6 gap-4 px-4 border-t py-3 group hover:bg-slate-50"
      {...rest}
    >
      <span className="group-hover:underline group-hover:text-blue-700">
        {data.code}
      </span>
      <span>{data.subject}</span>
      <span className="col-span-2">{data.title}</span>
      <span>{getSemAbbr(data.semester)}</span>
      <span>{data.year}</span>
    </div>
  );
};

const SolutionsList = ({ data }) => {
  return (
    <div className="overflow-x-scroll md:overflow-hidden relative w-full">
      <div className="rounded-lg overflow-hidden bg-white border min-w-[300%] md:min-w-full">
        <div className="grid grid-cols-6 gap-4 px-4 font-bold py-3">
          <span>Code</span>
          <span>Subject</span>
          <span className="col-span-2">Title</span>
          <span>Semester</span>
          <span>Year</span>
        </div>
        {data.map((item, index) => (
          <Link href={`/solutions/${item.slug}`} key={index}>
            <SolutionsListItem data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsList;
