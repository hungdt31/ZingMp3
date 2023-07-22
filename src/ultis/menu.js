import icons from "./icons"
const {MdOutlineLibraryMusic,MdOutlineStackedLineChart, MdRadio, MdCyclone, RiUserFollowLine} = icons
export const SidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <MdCyclone size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineStackedLineChart size={24}/>
    },
    {
        path: 'radio',
        text: 'Radio',
        icons: <MdRadio size={24}/>
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <RiUserFollowLine size={24}/>
    }
]