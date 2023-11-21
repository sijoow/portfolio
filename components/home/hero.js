
import Animation from "../animation"
export default function Hero(){
  return(
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 승환입니다.
        <br className="hidden lg:inline-block"/>오늘도 빡코딩?
      </h1>
      <p className="mb-8 leading-relaxed">
        별을 노루, 걱정도 별 시인의 무엇인지 듯합니다. 이름과, 많은 이 파란 까닭입니다. 나는 그리고 때 하나에 별 있습니다. 무엇인지 보고, 부끄러운 봅니다. 내 속의 오면 있습니다. 이런 사람들의 이웃 나는 쉬이 나의 까닭입니다. 그리워 옥 시와 프랑시스 까닭이요, 무엇인지 봅니다.
        아름다운 별 하나에 비둘기, 이국 가슴속에 패, 까닭입니다. 묻힌 불러 별 벌레는 이름자를 이런 별에도 봅니다. 쓸쓸함과 별 나는 말 보고, 멀리 봅니다. 아름다운 새겨지는 둘 쉬이 오면 까닭이요, 라이너 이름과, 있습니다. 이런 불러 어머님, 까닭이요, 다 잔디가 거외다.
        이네들은 이런 위에 아무 듯합니다. 위에 노새, 새워 무엇인지 멀듯이, 다 프랑시스 한 사랑과 봅니다.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          프로젝트 보러가기
          </button>            
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Animation/> 
    </div>
  </>
  )
}