//import { EmailTemplate } from '../../../components/EmailTemplate';

import { NextResponse } from 'next/server';
//import { Resend } from 'resend';

{/*const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
*/}
export function POST() {
 {/*} try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["younusansari233@gmail.com"],
      subject: 'Hello world',
      react: (
         <>
               <p>Email Body</p>
         </>
      ),
    });           

    return Response.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
*/}
return NextResponse.json({result:hello})
}