/**
 * Returns zodiac sign when passing month and day as params.
 * @param {number} month - Number of the month.
 * @param {number} day - Number of the day.
*/

function getZodiacSign (month, day) {

  const handleMonths = {
    1: function (day) {
      if (day <= 19) { return 'Capricorn' } else { return 'Aquarius' }
    },
    2: function (day) {
      if (day <= 18) { return 'Aquarius' } else { return 'Pisces' }
    },
    3: function (day) {
      if (day <= 20) { return 'Pisces' } else { return 'Aries' }
    },
    4: function (day) {
      if (day <= 19) { return 'Aries' } else { return 'Taurus' }
    },
    5: function (day) {
      if (day <= 20) { return 'Taurus' } else { return 'Gemini' }
    },
    6: function (day) {
      if (day <= 20) { return 'Gemini' } else { return 'Cancer' }
    },
    7: function (day) {
      if (day <= 22) { return 'Cancer' } else { return 'Leo' }
    },
    8: function (day) {
      if (day <= 22) { return 'Leo' } else { return 'Virgo' }
    },
    9: function (day) {
      if (day <= 22) { return 'Virgo' } else { return 'Libra' }
    },
    10: function (day) {
      if (day <= 22) { return 'Libra' } else { return 'Scorpio' }
    },
    11: function (day) {
      if (day <= 21) { return 'Scorpio' } else { return 'Sagittarius' }
    },
    12: function (day) {
      if (day <= 21) { return 'Sagittarius' } else { return 'Capricorn' }
    }
  };

  return (handleMonths[month](day));

}

module.exports = getZodiacSign;