import TwoFloor from "../../assets/floor/Harleston/2Harleston.png";
import styles from "./pic.module.css";

const Select = [
  {
    name: "288",
    coords: "430,2208,525,2403",
  },
  {
    name: "286",
    coords: "530,2210,619,2402",
  },
  {
    name: "284",
    coords: "626,2211,715,2406",
  },
  {
    name: "282",
    coords: "720,2213,809,2403",
  },
  {
    name: "280",
    coords: "815,2210,902,2403",
  },
  {
    name: "293",
    coords: "43,2201,201,2297",
  },
  {
    name: "295",
    coords: "44,2310,201,2402",
  },
  {
    name: "291",
    coords: "331,1914,428,2071",
  },
  {
    name: "289",
    coords: "439,1916,524,2073",
  },
  {
    name: "287",
    coords: "530,2011,616,2089",
  },
  {
    name: "285",
    coords: "627,2011,714,2092",
  },
  {
    name: "283",
    coords: "722,2010,809,2092",
  },
  {
    name: "281",
    coords: "816,2010,903,2092",
  },
  {
    name: "276",
    coords: "910,2343,998,2500",
  },
  {
    name: "274",
    coords: "1005,2340,1104,2497",
  },
  {
    name: "272",
    coords: "1230,2114,1389,2211",
  },
  {
    name: "270",
    coords: "1231,2021,1389,2106",
  },
  {
    name: "260",
    coords: "1103,1733,1293,1822",
  },
  {
    name: "261",
    coords: "902,1737,984,1818",
  },
  {
    name: "263",
    coords: "903,1833,983,1916",
  },
  {
    name: "264",
    coords: "1135,1925,1294,2011",
  },
  {
    name: "265",
    coords: "986,2008,903,1928",
  },
  {
    name: "262",
    coords: "1135,1829,1296,1916",
  },
  {
    name: "259",
    coords: "902,1645,983,1726",
  },
  {
    name: "258",
    coords: "1134,1640,1293,1725",
  },
  {
    name: "257",
    coords: "806,1547,965,1634",
  },
  {
    name: "256",
    coords: "1134,1544,1296,1631",
  },
  {
    name: "255",
    coords: "806,1439,963,1537",
  },
  {
    name: "254",
    coords: "1135,1451,1293,1534",
  },
  {
    name: "252",
    coords: "1157,1354,1294,1441",
  },
  {
    name: "250",
    coords: "1229,1256,1388,1350",
  },
  {
    name: "244",
    coords: "1395,1251,1230,1165",
  },
  {
    name: "242",
    coords: "1195,1069,1293,1154",
  },
  {
    name: "241",
    coords: "806,975,964,1070",
  },
  {
    name: "240",
    coords: "1103,975,1296,1062",
  },
  {
    name: "239",
    coords: "806,875,965,963",
  },
  {
    name: "238",
    coords: "1099,877,1292,963",
  },
  {
    name: "237",
    coords: "899,784,985,872",
  },
  {
    name: "236",
    coords: "1101,782,1294,873",
  },
  {
    name: "235",
    coords: "901,691,984,775",
  },
  {
    name: "234",
    coords: "1101,688,1294,779",
  },
  {
    name: "233",
    coords: "902,596,985,682",
  },
  {
    name: "232",
    coords: "1100,593,1296,680",
  },
  {
    name: "231",
    coords: "902,500,983,585",
  },
  {
    name: "230",
    coords: "1101,498,1296,585",
  },
  {
    name: "220",
    coords: "907,13,998,169",
  },
  {
    name: "222",
    coords: "1007,13,1104,170",
  },
  {
    name: "224",
    coords: "1231,299,1389,395",
  },
  {
    name: "226",
    coords: "1227,403,1389,492",
  },
  {
    name: "215",
    coords: "816,418,901,495",
  },
  {
    name: "214",
    coords: "817,110,903,300",
  },
  {
    name: "213",
    coords: "720,417,807,499",
  },
  {
    name: "212",
    coords: "722,106,809,300",
  },
  {
    name: "211",
    coords: "626,420,713,500",
  },
  {
    name: "210",
    coords: "626,107,715,302",
  },
  {
    name: "209",
    coords: "530,419,618,499",
  },
  {
    name: "208",
    coords: "531,106,619,302",
  },
  {
    name: "207",
    coords: "436,440,535,595",
  },
  {
    name: "206",
    coords: "433,106,524,302",
  },
  {
    name: "205",
    coords: "329,439,426,595",
  },
  {
    name: "203",
    coords: "43,214,199,314",
  },
  {
    name: "201",
    coords: "44,106,199,204",
  },
];

function Pic() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  return (
    <div className={styles.container}>
      <img
        // className={styles.pic}
        src={TwoFloor}
        alt="lol"
        useMap="#image-map"
      />
      <map name="image-map">
        {" "}
        {Select.map((element, key) => {
          return (
            <area
              key={key}
              target=""
              className={styles.lol}
              onClick={() => console.log(element.name)}
              alt={element.name}
              title={element.name}
              coords={element.coords}
              shape="rect"
            />
          );
        })}{" "}
        {/*     <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="288" title="288" href="\288" coords="430,2208,525,2403" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="286" title="286" href="\286" coords="530,2210,619,2402" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="284" title="284" href="\284" coords="626,2211,715,2406" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="282" title="282" href="\282" coords="720,2213,809,2403" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="280" title="280" href="\280" coords="815,2210,902,2403" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="293" title="293" href="\293" coords="43,2201,201,2297" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="295" title="295" href="\295" coords="44,2310,201,2402" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="291" title="291" href="\291" coords="331,1914,428,2071" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="289" title="289" href="\289" coords="439,1916,524,2073" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="287" title="287" href="\287" coords="530,2011,616,2089" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="285" title="285" href="\285" coords="627,2011,714,2092" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="283" title="283" href="\283" coords="722,2010,809,2092" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="281" title="281" href="\281" coords="816,2010,903,2092" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="/276" title="/276" href="\276" coords="910,2343,998,2500" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="274" title="274" href="\274" coords="1005,2340,1104,2497" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="272" title="272" href="\272" coords="1230,2114,1389,2211" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="270" title="270" href="\270" coords="1231,2021,1389,2106" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="260" title="260" href="\260" coords="1103,1733,1293,1822" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="261" title="261" href="\261" coords="902,1737,984,1818" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="263" title="263" href="\263" coords="903,1833,983,1916" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="264" title="264" href="\264" coords="1135,1925,1294,2011" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="265" title="265" href="\265" coords="986,2008,903,1928" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="262" title="262" href="\262" coords="1135,1829,1296,1916" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="259" title="259" href="\259" coords="902,1645,983,1726" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="258" title="258" href="\258" coords="1134,1640,1293,1725" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="257" title="257" href="\257" coords="806,1547,965,1634" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="256" title="256" href="\256" coords="1134,1544,1296,1631" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="255" title="255" href="\255" coords="806,1439,963,1537" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="254" title="254" href="\254" coords="1135,1451,1293,1534" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="252" title="252" href="\252" coords="1157,1354,1294,1441" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="250" title="250" href="\250" coords="1229,1256,1388,1350" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="244" title="244" href="\244" coords="1395,1251,1230,1165" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="242" title="242" href="\242" coords="1195,1069,1293,1154" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="241" title="241" href="\241" coords="806,975,964,1070" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="240" title="240" href="\240" coords="1103,975,1296,1062" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="239" title="239" href="\239" coords="806,875,965,963" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="238" title="238" href="\238" coords="1099,877,1292,963" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="237" title="237" href="\237" coords="899,784,985,872" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="236" title="236" href="\236" coords="1101,782,1294,873" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="235" title="235" href="\235" coords="901,691,984,775" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="234" title="234" href="\234" coords="1101,688,1294,779" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="233" title="233" href="\233" coords="902,596,985,682" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="232" title="232" href="\232" coords="1100,593,1296,680" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="231" title="231" href="\231" coords="902,500,983,585" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="230" title="230" href="\230" coords="1101,498,1296,585" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="220" title="220" href="\220" coords="907,13,998,169" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="222" title="222" href="\222" coords="1007,13,1104,170" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="224" title="224" href="\224" coords="1231,299,1389,395" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="226" title="226" href="\226" coords="1227,403,1389,492" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="215" title="215" href="\215" coords="816,418,901,495" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="214" title="214" href="\214" coords="817,110,903,300" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="213" title="213" href="\213" coords="720,417,807,499" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="212" title="212" href="\212" coords="722,106,809,300" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="211" title="211" href="\211" coords="626,420,713,500" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="210" title="210" href="\210" coords="626,107,715,302" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="209" title="209" href="\209" coords="530,419,618,499" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="208" title="208" href="\208" coords="531,106,619,302" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="207" title="207" href="\207" coords="436,440,535,595" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="206" title="206" href="\206" coords="433,106,524,302" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="205" title="205" href="\205" coords="329,439,426,595" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="203" title="203" href="\203" coords="43,214,199,314" shape="rect"/>
                <area target="" className={styles.lol} onClick={()=> console.log("clicked")} alt="201" title="201" href="\201" coords="44,106,199,204" shape="rect"/> */}{" "}
      </map>{" "}
    </div>
  );
}

export default Pic;
