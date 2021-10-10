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
