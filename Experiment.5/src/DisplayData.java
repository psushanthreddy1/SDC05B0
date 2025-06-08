import java.sql.*;

public class DisplayData {
    public static void main(String[] args) {
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost/db", "root", "sushanth@123");
             Statement s = con.createStatement()) {

            ResultSet rs = s.executeQuery("SELECT * FROM student");
            if (rs != null) {
                System.out.println("SID \t STU_NAME \t ADDRESS");
                System.out.println("________________________________________");

                while (rs.next()) {
                    System.out.println(rs.getString("sid") + " \t " + rs.getString("sname") + " \t " + rs.getString("saddress"));
                    System.out.println("________________________________________");
                }
            }

        } catch (SQLException err) {
            System.out.println("ERROR: " + err);
        }
    }
}

