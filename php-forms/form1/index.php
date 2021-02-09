
<!DOCTYPE html>
<html>
    <head>
        <title>user form</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>User Form</h2>
            </div>
            <form  class="form" id="form">
                <table>
                    <tr>
                        <td class="key">Enter Name</td>
                        <td class="form-control">
                            <input class="box" type="text" id="name">
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Enter Password</td>
                        <td class="form-control">
                            <input class="box" type="text" id="password">
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Enter Address</td>
                        <td class="form-control">
                            <textarea class="box" id="address" rows="4" ></textarea>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Select Game</td>
                        <td class="form-control">
                            <input type="checkbox" id="hockey" name="Hockey" value="Hockey">
                            <label for="Hockey">Hockey</label><br>
                            <input type="checkbox" id="football" name="Football" value="Football">
                            <label for="Football">Football</label><br>
                            <input type="checkbox" id="badminton" name="Badminton" value="Badminton">
                            <label for="Badminton">Badminton</label><br>
                            <input type="checkbox" id="cricket" name="Cricket" value="Cricket">
                            <label for="Cricket">Cricket</label><br>
                            <input type="checkbox" id="volleyball" name="volleyball" value="volleyball">
                            <label for="volleyball">volleyball</label><br>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Gender</td>
                        <td class="form-control">
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="male">Male</label><br>
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female">Female</label><br>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="key">Select ur age</td>
                        <td class="form-control">
                            <select class="box" name="age" id="age">
                                <option value="select">select</option>
                                <option value="Under 14">Under 14</option>
                                <option value="Under 17">Under 17</option>
                                <option value="Under 19">Under 19</option>
                                <option value="Above 19">Above 19</option>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error Message</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="form-control file" colspan="2">
                                <input class="bgcolor" type="file" id="file">
                                
                        </td>
                    </tr>
                    <tr>
                        <td class="form-control file" colspan="2">
                                <input class="btn bgcolor " type="reset" value="Reset">
                                <input class="btn bgcolor" type="submit" value="Submit Form">
                        </td>
                    </tr>
                
                
                
                </table>
            </form>
        </div>


        <script src="script.js"></script>
        <script src="obj.js"></script>

    </body>
</html>