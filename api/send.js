export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { phone, otp, action } = req.body;

    if (action === 'send_otp') {
        return res.status(200).json({
            success: true,
            message: `OTP sent successfully to ${phone}`
        });
    }

    if (action === 'verify_otp') {
        return res.status(200).json({
            success: true,
            message: 'Login verified successfully'
        });
    }

    return res.status(400).json({ success: false, message: 'Invalid action' });
}
