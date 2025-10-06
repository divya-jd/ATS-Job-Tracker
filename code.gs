const JOB_QUERY =
  '("Fullstack Engineer" OR "AI Engineer" OR "Backend Developer" OR "Python Developer" OR "Java Developer" OR "Application Developer") (site:lever.co OR site:greenhouse.io OR site:myworkdayjobs.com OR site:icims.com OR site:taleo.net OR site:smartrecruiters.com OR site:jobvite.com OR site:successfactors.com OR site:breezy.hr OR site:bullhorn.com OR site:bamboohr.com OR site:ashbyhq.com) "United States"';
const ALERT_EMAIL = 'youremail@gmail.com';   // optional
const MAX_RESULTS = 15;

function fetchATSJobs() {
  try {
    const props = PropertiesService.getScriptProperties();
    const url =
      'https://www.googleapis.com/customsearch/v1?key=' +
      props.getProperty('API_KEY') +
      '&cx=' +
      props.getProperty('CX_ID') +
      '&q=' +
      encodeURIComponent(JOB_QUERY);

    const res = UrlFetchApp.fetch(url);
    const data = JSON.parse(res.getContentText());
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const now = new Date();

    if (!data.items) {
      sheet.appendRow([now, '', '', '', 'No new jobs found']);
      return;
    }

    let body = '<h3>New ATS Job Postings</h3><ul>';
    data.items.slice(0, MAX_RESULTS).forEach(item => {
      sheet.appendRow([now, item.title, item.displayLink, item.link, '']);
      body += `<li><a href="${item.link}">${item.title}</a> - ${item.displayLink}</li>`;
    });
    body += '</ul>';

    MailApp.sendEmail({
      to: ALERT_EMAIL,
      subject: '🆕 New ATS Job Listings Found',
      htmlBody: body,
    });
  } catch (err) {
    SpreadsheetApp.getActiveSpreadsheet()
      .getActiveSheet()
      .appendRow([new Date(), '', '', '', err.toString()]);
  }
}
