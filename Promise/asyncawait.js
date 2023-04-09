console.log('Person1: Show Ticket');
console.log('Person2: Show Ticket');

const preMovie = async () => {
    const promiseforticket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('couples shows tickets'), 3000);
    });

    const getpopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getbutter = new Promise((resolve, reject) => resolve('butter'));
    const getcolddink = new Promise((resolve, reject) => resolve('colddrink'));

    let [popcorn,butter,colddrink] = await Promise.all([getpopcorn,getbutter,getcolddink])

    console.log(' ${popcorn}, ${butter}, ${coldrink}')



    console.log('W:I have the tick');
    console.log('H: lets go in');
    console.log('W: no im hungry');

    console.log('H: i got some ${popcorn} ');
    console.log('H: we should go in now');
    console.log('W:I want butter also');

    console.log('H:I got the ${butter} ');
    console.log('H: Anything else');
    console.log('W:I want colddrink also');
    console.log('H: ohh  god');

    console.log('H:I got the ${colddrink} ');
    console.log('H: Anything else');
    console.log('W:lets go in');
    console.log('H: thanks  god');


    return ticket;
}


preMovie().then((m) => console.log(m));


console.log('Person4: Show Ticket');
console.log('Person5: Show Ticket');

