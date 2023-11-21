import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imageSrc = data.cover && data.cover.external && data.cover.external.url;
  const tags = data.properties.관련기술.multi_select


  console.log(tags)

  return (
    <>
      <div className="project-card">
        <Image
          className="rounded-t-xl"
          src={imageSrc}
          alt="cover image"
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />

      <div className="p-4 flex flex-col">
         <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="mt-4 text-xl">{description}</h3>
          <a href={githubLink}>깃허브 바로가기</a> 
          <div className="flex items-start mt-2">
                {tags.map((aTag) => (
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                ))}
            </div>         
        </div>

      </div>
    </>
  );
}
