const {db} = require('../util/admin');

const {
  isValidParamId
} = require('../util/validators');

exports.getAllNotifications = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const obj = [
    {
      'message': 'Please tells us about your last session with Mawuli A. The session review hour is open for 24 hours',
      'date': '2 days ago',

    },
    {
      'message': 'Invite a friend and earn $20',
      'date': 'November 20',

    },
    {
      'message': 'Connect easily with Facebook to complete your profile and make it easy to login.',
      'date': 'November 20',

    },
    {
      'message': 'You can now let potential tutors when you prefer to tutor. Set your availabilty',
      'date': 'January 2',

    }
  ];

  return resp.status(200).json(obj);
};