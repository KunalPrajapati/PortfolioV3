import ExperienceCard from "../ExperienceCard";


const title = "The SkyTrails";
const position = "React Native Developer Intern";
const date = "04 March - 31-May";
const tasks = [
    'Developed Holiday Package Module.',
    'Implemented Skeleton Loader in the app.',
    'Increased app performance with 28% by using code splitting, lazy loading.',
    'Integrated Backend APIs with frontend.'
];

const title2 = "Bluecollarlog";
const position2 = "React Native Developer Intern";
const date2 = "05 Dec'23 - 29 Feb'24";
const tasks2 = [
    'Directed end-to-end development of the mobile app.',
    'Successfully integrated backend APIs for seamless functionality within the app.',
    'Strategically planned and implemented scalable solutions to support the growth of the app infrastructure.'
];

const title3 = "Infotrixs";
const position3 = "Frontend Developer Intern";
const date3 = "03 Jul'23 - 30 Sept'23";
const tasks3 = [
    'Managed a team of three interns and worked collaboratively on a project.',
    'Distribution of work and collaboration with team and mentors.',
    'Resolved Bug Related to Products.',
    'Contributed to developing the website of the company.'
];

const Experience = () => {
    return (
        <section id="experience" className="container flex flex-col justify-center w-full mx-auto ">
            <div className="flex items-center mt-20 gap-x-4 ">
                <h2 className="flex items-center text-2xl font-bold text-white gap-x-2 dark:text-gray-700">
                    <span className="text-pink-500 rounded backdrop-blur ">02.</span>Experience</h2>
                <div className="relative top-[2px] h-[1px] flex-grow animate-bounce  dark:bg-neutral-950/10 bg-white/20"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 py-16 lg:grid-cols-3">
                <ExperienceCard title={title} position={position} date={date} tasks={tasks} />
                <ExperienceCard title={title2} position={position2} date={date2} tasks={tasks2} />
                <ExperienceCard title={title3} position={position3} date={date3} tasks={tasks3} />
            </div>

        </section>
    );
};

export default Experience;