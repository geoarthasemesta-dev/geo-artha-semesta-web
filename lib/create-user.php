<?php
header("Content-Type: application/json");

// Koneksi DB
$host = "localhost";
$dbname = "ptbd8412_personal_web"; 
$username = "ptbd8412_admin"; 
$password = "@Saya12345";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

// Ambil data dari request body (JSON)
$input = json_decode(file_get_contents("php://input"), true);

// Validasi field wajib
if (empty($input['name']) || empty($input['email'])) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email are required"]);
    exit;
}

// Query insert
try {
    $stmt = $pdo->prepare("
        INSERT INTO users (name, email, phone_number, interest, subject, message, created_at, updated_at) 
        VALUES (:name, :email, :phone_number, :interest, :subject, :message, NOW(), NOW())
    ");
    $stmt->execute([
        ":name"         => $input['name'],
        ":email"        => $input['email'],
        ":phone_number" => $input['phone_number'] ?? null,
        ":interest"     => $input['interest'] ?? null,
        ":subject"      => $input['subject'] ?? null,
        ":message"      => $input['message'] ?? null,
    ]);

    echo json_encode([
        "success" => true,
        "message" => "User created successfully",
        "user_id" => $pdo->lastInsertId()
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to create user: " . $e->getMessage()]);
}
