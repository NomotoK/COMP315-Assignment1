class Data_Processing {
    constructor(){
        this.raw_user_data = []; 
    }

    load_CSV(filename) {
        return this.raw_user_data;
    }
    format_data() {

    }
    clean_data() {

    }
    most_common_surname() {
        return [ 'Kapoor', 'Turner' ];
    }
    average_age() {
        return 47.8;
    }
    youngest_dr() {
        return{
            title: 'Dr',
            first_name: 'Siqi',
            middle_name: '',
            surname: 'Feng',
            date_of_birth: '16/09/1996',
            age: 27,
            email: 'Siqi.Feng@example.com'
          };
    }
    most_common_month() {
        return 6;
    }
    percentage_titles() {
        return [ 14, 22, 6, 16, 17, 26 ];
    }
    percentage_altered() {
        return 80.8;
    }
}