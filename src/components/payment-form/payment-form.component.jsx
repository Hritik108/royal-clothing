import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import Button,{ BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormConatiner,FormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";


const PaymentForm = () =>{

    const stripe = useStripe();
    const elements = useElements();
    const amount= useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment,setIsProcessingPayment] = useState(false);

    const paymentHandler = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){    //to make sure both  the instances are loaded
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent',{

            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({amount:amount*100}) //since stripe accepts payment in cents we are multipying dollars to 100
        }).then( res => res.json())

        const {
            paymentIntent : {client_secret},
        } = response;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name: currentUser?currentUser.displayName: 'Guest',
                }
            }
        })

        setIsProcessingPayment(false);

        if(paymentResult.error){
            alert(paymentResult.error);
            console.log(paymentResult.error)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment Successful')
                console.log("success")
            }
        }

    }

    return (
        <PaymentFormConatiner>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
            <CardElement/>
            <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormConatiner>
    )

}
export default PaymentForm;