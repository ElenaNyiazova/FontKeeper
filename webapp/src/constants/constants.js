export const FotnTypes = [
  {
    name: "С засечками",
    categorie: "serif",
  },
  {
    name: "Без засечек",
    categorie: "sans-serif",
  },
  {
    name: "Рукописный",
    categorie: "display",
  },
  {
    name: "Экранный",
    categorie: "handwriting",
  },
  {
    name: "Моноширинный",
    categorie: "monospace",
  },
];

export const FontAbcs = [
  {
    name: "Кириллица",
    key: "cyrilic",
  },
  {
    name: "Латиница",
    key: "latin",
  },
];

export const Sources = [
  {
    name: "Google fonts",
    key: "google",
  },
  {
    name: "Буква к букве",
    key: "local",
  },
  {
    name: "Мои",
    key: "mine",
  },
];

export const API_KEY = "AIzaSyDF6ou8MWWDhIgD84awJTAvD59wg0XZDPc";

export const THROTTLE_TIMEOUT = 1500;

export const ABCString =
  "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя";

export const ABC =
  "Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя".split(
    " "
  );

export const mockRules = [
  {
    letters: "АДЛ",
    text: "Если д и л треугоьные — верхний угол должен быть одинаковым",
  },
  {
    letters: "АН",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    letters: "АУМИ",
    text: "Cмотрим на угод наклонных штрихов",
  },
  {
    letters: "ес еобр еа еэ",
    text: "Cмотрим на угод наклонных штрихов",
  },
  {
    letters: "АУМИ",
    text: "Cмотрим на угод наклонных штрихов",
  },
  {
    letters: "ес еобр еа еэ",
    text: "Cмотрим на угод наклонных штрихов",
  },
];

export const mainRules = [
  {
    letters: "ЖК",
    text: "Диагонали должны крепиться к вертикали одинаковым образом",
  },
  {
    letters: "АНАО",
    text: "Соотношение ширин трех базовых форм треугольника, прямоугольника, овала.",
  },
  {
    letters: "ДЛ",
    text: "Буквы должны быть одинаковой конструкции, либо треугольник, либо трапеция",
  },
  {
    letters: "в",
    text: "Строчная буква в должна повторять конструкцию заглавной, и не выглядитть как курсив",
  },
];

export const USERS_MOCK = [
  {name: 'Повелитель шрифтов', email: 'Font-keeper@epam.com', suggested: '2', approved: '2', active: true},
  {name: 'Мария Притчина', email: 'debra.holt@example.com', suggested: '2', approved: '1', active: false},
  {name: 'Светлана Тереньтьева', email: 'michelle.rivera@example.com', suggested: '0', approved: '0', active: false},
  {name: 'Богдан Климов', email: 'jackson.graham@example.com', suggested: '102', approved: '30', active: true},
  {name: 'Марина Харина', email: 'bill.sanders@example.com', suggested: '0', approved: '0', active: false},
  {name: 'Елена Ниязова', email: 'michael.mitc@example.com', suggested: '33', approved: '4', active: true},
  {name: 'Виталий Колесов', email: 'debra.holt@example.com', suggested: '9', approved: '8', active: true},
]

export const SUGGESTIONS_MOCK = [
  {fontName: 'Perfect coffee', license: 'Демо версия', source: 'https://www.behance.net/gallery/105925109/Worthbites-Display-Font', user: 'Богдан Климов', type: 'Без засечек, моноширинный', lang: 'Латиница, Кириллица'},
  {fontName: 'Exoner', license: 'Платный', source: 'https://www.fontspace.com/glory-lake-font-f67791', user: 'Марина Харина', type: 'Без засечек, моноширинный', lang: 'Кириллица'},
  {fontName: 'Keway', license: 'Платный', source: 'https://www.fontspace.com/batfide-signature-font-f67729', user: 'Елена Ниязова', type: 'Без засечек, моноширинный', lang: 'Кириллица'},
]

export const LIBRARY_MOCK = [
  {fontName: 'Obituary', license: 'Свободно распространяемый', source: 'https://pixelify.net/artist/creatypestudio/', type: 'Без засечек, моноширинный', lang: 'Латиница, Кириллица'},
  {fontName: 'Veggy', license: 'Неизвестно', source: 'https://www.behance.net/gallery/105925109/Worthbites-Display-Font', type: 'Без засечек, моноширинный', lang: 'Кириллица'},
  {fontName: 'Perfect coffee', license: 'Демо версия', source: 'https://www.behance.net/gallery/105925109/Worthbites-Display-Font', type: 'Без засечек, моноширинный', lang: 'Латиница, Кириллица'},
]

export const RULES_MOCK = [
  {mainLetters: 'АНО', extraLetters: 'АНАО', rule: 'Соотношение ширин трех базовых форм треугольника, прямоугольника, овала', category: 'Форма букв', importance: '10', visibility: true},
  {mainLetters: 'З', extraLetters: 'ЗЭС', rule: 'Засечки или капли на концах штрихов должны совпадать', category: 'Форма букв', importance: '8', visibility: false},
  {mainLetters: 'З', extraLetters: 'ЗЭ', rule: 'Форма перекладины должна совпадать', category: 'Форма букв', importance: '8', visibility: true},
  {mainLetters: 'З', extraLetters: 'ЗВ', rule: 'Правые полуовалы должны быть похожи. Нижний полуовал в может быть чуть больше', category: 'Форма букв', importance: '8', visibility: true},
]