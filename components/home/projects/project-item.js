import Image from "next/legacy/image";


export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imageSrc = data.cover.file.url
  const tags = data.properties.관련기술.multi_select
  const SiteLink = data.properties.URL.url

  if (imageSrc) {
    // 이미지 URL이 존재할 때의 로직
    console.log(imageSrc);
  } else {
    // 이미지 URL이 존재하지 않을 때의 로직
    console.error('Image URL not found');
  }

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

      <div className="p-4 flex flex-col cards">
         <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="mt-4 text-sl">{description}</h3>
          <a href={SiteLink} className="mt-4">라이브 사이트 바로가기</a> 
          <a href={githubLink} className="mt-2">깃 바로가기</a> 
          <div className="flex items-start mt-4">
                {tags.map((aTag) => (
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                ))}
            </div>         
        </div>

      </div>
    </>
  );
}
