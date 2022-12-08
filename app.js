let series = {
    name: "Семнадцать мгновений весны",
    releaseDate: 1973,
    country: 'USSR',
    language: 'Russian',
    duration: 66-72,
    actors: ['Вячеслав Тихонов',
        'Леонид Броневой',
        'Олег Табаков',
        'Юрий Визбор',
        'Ростислав Плятт',
        'Евгений Евстигнеев',
        'Василий Лановой',
        'Екатерина Градова',
        'Николай Прокопович',
        'Леонид Куравлёв'],
    episodes: {
        episode1: 'Первая серия',
        episode2: 'Вторая серия',
        episode3: 'Третья серия',
        episode4: 'Четвертая серия',
        episode5: 'Пятая серия',
        episode6: 'Шестая серия',
        episode7: 'Седьмая серия',
        episode8: 'Восьмая серия',
        episode9: 'Девятая серия',
        episode10: 'Десятая серия',
        episode11: 'Одинадцатая серия',
        episode12: 'Двенадцатая серия',
    },
    filmCrew: {
        writtenBy: 'Юлиан Семёнов',
        producer: 'Татьяна Лиознова',
        operators: 'Пётр Катаев, Анатолий Буравчиков',
        costumeDesigner: 'Мариам Быховская',
        productionDesigner: 'Борис Дуленков',
        soundEngineer: 'Леонард Бухов',
    },
    format: "DVD"
}
console.log("Сериал" + " '" + series.name + "'" + ', ' + 'был выпущен'+ " в " +  series.releaseDate + ' году' +
    "\nВ главных ролях " + series.actors[0] + ", " + Object.keys(series.episodes).length + " серий.")
alert('Рекомендую фильм к просмотру. Фильм про советстких разведчиков!')