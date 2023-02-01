import axios from "axios";


export const slackNotification = async (data: string) => {
    const message = JSON.stringify({'text' : data});
    // const res = await axios.post('https://hooks.slack.com/services/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', message)
    return res.status
}